import { useEffect } from "react";
import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { MessageError } from "../../components/MessageError";
import { AuthContext } from "../../contexts/auth";

import * as S from "./styles";

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { signIn, message, updateMessage } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();

    if (email && senha) {
      setLoading(true);
      await signIn(email, senha, () => {
        setLoading(false);
        navigate("/", { replace: true });
        updateMessage("");
      });
    }
  };

  /* useEffect(() => {
    signed && navigate("/", { replace: true });
  }, [signed]); */

  return (
    <S.Page>
      {message && <MessageError message={message} />}

      <S.Wrap>
        <S.Title>Área restrita</S.Title>
        <S.Form onSubmit={(e) => handleSignIn(e)}>
          <S.Input
            type="email"
            className="input"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <S.Input
            type="password"
            className="input"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Button type="submit" icon="login" size="large" color="primary">
            Acessar
          </Button>
        </S.Form>
      </S.Wrap>
      {loading ? <Loading /> : null}
    </S.Page>
  );
}
