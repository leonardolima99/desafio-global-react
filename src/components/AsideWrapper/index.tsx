import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import * as S from "./styles";

export type AsideWrapperProps = {
  children: JSX.Element;
};

export function AsideWrapper({ children }: AsideWrapperProps) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(() => {
      navigate("/signin", { replace: true });
    });
  };

  return (
    <S.Page>
      <S.Aside>
        <S.Header>Global Tecnologia</S.Header>
        <S.Wrap>
          <S.Menu>
            <S.Item>Principal</S.Item>
            {user?.nivel_acesso === "administrador" ? (
              <S.Item>Gerenciamento de usuários</S.Item>
            ) : null}
          </S.Menu>
          <S.Logout onClick={handleSignOut}>Sair</S.Logout>
        </S.Wrap>
      </S.Aside>
      <S.Main>{children}</S.Main>
    </S.Page>
  );
}
