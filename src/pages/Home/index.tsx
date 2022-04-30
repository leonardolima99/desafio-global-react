import { useState } from "react";

import "./styles.css";

export function Home() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  return (
    <div className="home">
      <aside className="aside">
        <header className="header">Global Tecnologia</header>
        <div className="wrap">
          <div className="menu">
            <div className="item">Principal</div>
            <div className="item">Gerenciamento de usuários</div>
          </div>
          <div className="item logout">Sair</div>
        </div>
      </aside>
      <main></main>
    </div>
  );
}
