import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";

import api from "../services/api";
import * as auth from "../services/auth";
import { AxiosError, AxiosResponse } from "axios";
import { Loading } from "../components/Loading";

type AuthContextData = {
  token?: string;
  signed: boolean;
  loading: boolean;
  user: User | undefined;
  message: string;
  updateMessage: (new_message: string) => void;
  signIn(email: string, senha: string, callback: VoidFunction): void;
  signOut(callback: VoidFunction): void;
};

type AuthProviderProps = {
  children: JSX.Element;
};

interface DecodedToken extends JwtPayload {
  email: string;
  nivel_acesso: string;
}

type User = {
  token: string;
  email: string;
  nivel_acesso: string;
};

type ResponseData = {
  token?: string;
  message?: string;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  function decode(token: string | undefined): User | undefined {
    if (token) {
      const decoded = jwtDecode<DecodedToken>(token);

      if ((decoded.exp as number) * 1000 < Date.now()) {
        return undefined;
      } else {
        return {
          token,
          email: decoded.email,
          nivel_acesso: decoded.nivel_acesso,
        };
      }
    } else {
      return undefined;
    }
  }

  function updateMessage(new_message: string) {
    setMessage(new_message);
  }

  async function signIn(email: string, senha: string, callback: VoidFunction) {
    auth
      .signIn(email, senha)
      .then((response) => {
        if (response?.status === 401) {
          updateMessage(JSON.stringify(response?.data));
        }

        const user_temp = decode(response?.data.token);
        if (user_temp) {
          localStorage.setItem("User", JSON.stringify(user_temp));
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${user_temp.token}`;
          setUser(user_temp);
        }
      })
      .catch((error: AxiosError<AxiosResponse<ResponseData>>) => {
        const err = new AxiosError(error.message);
        const { response } = err.message as any;
        if (response) {
          updateMessage(response.data.message);
        }
      });

    callback();
  }

  function signOut(callback: VoidFunction) {
    setUser(undefined);

    api.defaults.headers.common["Authorization"] = "";

    localStorage.removeItem("User");

    callback();
  }

  const loadStorageData = (): null => {
    const temp = localStorage.getItem("User");
    const storageUser = temp && JSON.parse(temp);

    if (storageUser) {
      if (user == storageUser) return null;

      const user_temp = decode(storageUser.token);
      if (user_temp) {
        localStorage.setItem("User", JSON.stringify(user_temp));
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${user_temp.token}`;
        setUser(user_temp);
      }
    }
    setLoading(false);

    return null;
  };

  useEffect(() => {
    loadStorageData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        message,
        updateMessage,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
