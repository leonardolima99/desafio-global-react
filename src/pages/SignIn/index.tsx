import { useState } from "react";
import { Button } from "../../components/Button";

import * as S from "./styles";

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  return (
    <S.Page>
      <S.Wrap>
        <S.Title>Área restrita</S.Title>
        <S.Form>
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
