import { useEffect } from "react";
import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { AuthContext } from "../../contexts/auth";

import * as S from "./styles";

export function SignIn() {
  const [email, setEmail] = useState<string>("usuarioadm@teste.com.br");
  const [senha, setSenha] = useState<string>("123456");

  const { signIn, signed } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();

    if (email && senha) {
      signIn(email, senha, () => {
        navigate("/", { replace: true });
      });
    }
  };

  /* useEffect(() => {
    signed && navigate("/", { replace: true });
  }, [signed]); */

  return (
    <S.Page>
      <S.Wrap>
        <S.Title>Área restrita {signed + ""}</S.Title>
        <S.Form onSubmit={(e) => handleSignIn(e)}>
          <S.Input
            type="email"
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
          <Button icon="login" size="large" color="primary">
            Acessar
          </Button>
        </S.Form>
      </S.Wrap>
    </S.Page>
  );
}
