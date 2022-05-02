import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import { Button } from "../Button";

import * as S from "./styles";

export type AsideWrapperProps = {
  children: JSX.Element;
};

export function AsideWrapper({ children }: AsideWrapperProps) {
  const { signOut, user } = useAuth();
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(() => {
      navigate("/signin", { replace: true });
    });
  };

  return (
    <S.Page>
      <S.Aside visible={visible}>
        <S.Header>Global Tecnologia</S.Header>
        <S.Span></S.Span>
        <S.Wrap>
          <S.Menu>
            <Link to="/" style={{ textDecoration: "none", color: "#202020" }}>
              <S.Item>Principal</S.Item>
            </Link>
            {user?.nivel_acesso === "administrador" ? (
              <Link
                to="/management"
                style={{ textDecoration: "none", color: "#202020" }}
              >
                <S.Item>Usuários</S.Item>
              </Link>
            ) : null}
          </S.Menu>
          <S.Logout onClick={handleSignOut}>Sair</S.Logout>
        </S.Wrap>
      </S.Aside>

      <S.Main visible={visible}>
        <S.WrapButton>
          <Button
            size="small"
            icon="none"
            color="primary"
            onClick={() => setVisible(!visible)}
          >
            {visible ? "Fechar Menu" : "Abrir Menu"}
          </Button>
        </S.WrapButton>

        {children}
      </S.Main>
    </S.Page>
  );
}
