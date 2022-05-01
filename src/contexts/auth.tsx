import { createContext, useState } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";

import api from "../services/api";
import { AxiosError } from "axios";

type AuthContextData = {
  token?: string;
  signed: boolean;
  signIn(email: string, senha: string): any;
  signOut(): void;
};

type AuthProviderProps = {
  children: JSX.Element;
};

interface DecodedToken extends JwtPayload {
  email: string;
  nivel_acesso: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [signed, setSigned] = useState<boolean>(false);

  async function signIn(email: string, senha: string) {
    try {
      if (!email) throw new Error("O campo e-mail é obrigatório.");
      if (!senha) throw new Error("O campo senha é obrigatória.");

      const params = new URLSearchParams();
      params.append("email", email);
      params.append("senha", senha);

      api
        .post("login", params)
        .then((response) => {
          console.log("respsostas", response.data.token);
          const decoded = jwtDecode<DecodedToken>(response.data.token);

          if ((decoded.exp as number) * 1000 < Date.now()) {
            setSigned(false);
            console.log("token expired");
          } else {
            api.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${response.data.token}`;

            localStorage.setItem("User:token", response.data.token);
            localStorage.setItem("User:email", decoded.email);
            localStorage.setItem("User:nivel_acesso", decoded.nivel_acesso);

            setSigned(true);
          }
        })
        .catch((err) => {
          setSigned(false);
          console.log(err.response.data.message);
        });
    } catch (err) {
      const error = err as Error | AxiosError;
      /* console.log(error.message); */
    }
  }

  function signOut() {
    setSigned(false);

    api.defaults.headers.common["Authorization"] = "";

    localStorage.remove("User:token");
    localStorage.remove("User:email");
    localStorage.remove("User:nivel_acesso");
  }

  return (
    <AuthContext.Provider value={{ signed, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
