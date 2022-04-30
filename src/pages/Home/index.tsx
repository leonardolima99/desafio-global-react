import { Button } from "../../components/Button";
import * as S from "./styles";

import "./styles.css";

export function Home() {
  return (
    <S.Page>
      <S.Aside>
        <S.Header>Global Tecnologia</S.Header>
        <S.Wrap>
          <S.Menu>
            <S.Item>Principal</S.Item>
            <S.Item>Gerenciamento de usuários</S.Item>
          </S.Menu>
          <S.Logout>Sair</S.Logout>
        </S.Wrap>
      </S.Aside>
      <S.Main></S.Main>
    </S.Page>
  );
}
