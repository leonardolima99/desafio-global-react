import { FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import api from "../../services/api";

import * as S from "./styles";

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const handleSignIn = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const params = new URLSearchParams();
      params.append("email", email);
      params.append("senha", senha);
      const response = await api.post("login", params);
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("token"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Page>
      <S.Wrap>
        <S.Title>Área restrita</S.Title>
        <S.Form onSubmit={(e) => handleSignIn(e)}>
          <S.Input
            type="text"
            className="input"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Input
            type="password"
            className="input"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button icon="login" size="large">
            Acessar
          </Button>
        </S.Form>
      </S.Wrap>
    </S.Page>
  );
}
