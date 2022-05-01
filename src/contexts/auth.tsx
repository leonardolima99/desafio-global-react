import { createContext, useContext, useEffect, useState } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";

import api from "../services/api";
import * as auth from "../services/auth";
import { AxiosError } from "axios";

type AuthContextData = {
  token?: string;
  signed: boolean;
  loading: boolean;
  user: User | undefined;
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

  async function signIn(email: string, senha: string, callback: VoidFunction) {
    try {
      if (!email) throw new Error("O campo e-mail é obrigatório.");
      if (!senha) throw new Error("O campo senha é obrigatório.");

      const response = await auth.signIn(email, senha);
      console.log(response);
      const user_temp = decode(response.data.token);

      if (user_temp) {
        localStorage.setItem("User", JSON.stringify(user_temp));
        api.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${user_temp.token}`;
        setUser(user_temp);
      }

      callback();
    } catch (error) {
      const err = error as Error | AxiosError;
      throw new Error(err.message);
    }
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

    console.log("storageUser", storageUser);
    if (storageUser) {
      if (user == storageUser) return null;

      const user_temp = decode(storageUser.token);
      console.log(user_temp);
      if (user_temp) {
        localStorage.setItem("User", JSON.stringify(user_temp));
        api.defaults.headers.common["Authorization"] = `Bearer ${user?.token}`;
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
    return <h1>Loading...</h1>;
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
