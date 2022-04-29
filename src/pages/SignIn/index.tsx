import { useState } from "react";

import "./styles.css";

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  return (
    <div className="signin">
      <div className="wrap">
        <span className="title">Área restrita</span>
        <form className="form">
          <input
            type="text"
            className="input"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit" className="button">
            Acessar
          </button>
        </form>
      </div>
    </div>
  );
}
