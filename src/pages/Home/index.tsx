import { Button } from "../../components/Button";

import "./styles.css";

export function Home() {
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
