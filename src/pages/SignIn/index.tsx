import { useState } from "react";
import { Button } from "../../components/Button";

import { Form, Input, Page, Title, Wrap } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  return (
    <Page>
      <Wrap>
        <Title>Área restrita</Title>
        <Form>
          <Input
            type="text"
            className="input"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            className="input"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button icon="login" size="large">
            Acessar
          </Button>
        </Form>
      </Wrap>
    </Page>
  );
}
