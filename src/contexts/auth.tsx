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
  message: MessageParams;
  updateMessage: (params: MessageParams) => void;
  signIn(email: string, senha: string, callback: VoidFunction): void;
  signOut(callback: VoidFunction): void;
};

type MessageParams = {
  new_message: string[];
  type: "error" | "success" | "info" | undefined;
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
  const [message, setMessage] = useState<MessageParams>({} as MessageParams);

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

  function updateMessage({ new_message, type }: MessageParams) {
    setMessage({ new_message, type });
  }

  async function signIn(email: string, senha: string, callback: VoidFunction) {
    auth
      .signIn(email, senha)
      .then((response) => {
        const user_temp = decode(response?.data.token);
        if (user_temp) {
          localStorage.setItem("User", JSON.stringify(user_temp));
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${user_temp.token}`;
          setUser(user_temp);
        }
      })
      .catch((error) => {
        console.log(error.message.response.data.message);
        updateMessage({
          new_message: [error.message.response.data.message],
          type: "error",
        });
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
