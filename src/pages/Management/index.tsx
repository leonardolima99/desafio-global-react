import { useState } from "react";
import { Button } from "../../components/Button";
import { UserControl } from "../../components/UserControl";
import * as S from "./styles";
import "./styles.css";
export function Management() {
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <S.Page>
      <S.Header>
        <S.Title>Usuários</S.Title>
        <Button size="large" icon="none" color="primary">
          Novo usuário
        </Button>
      </S.Header>
      {visible ? <UserControl /> : null}
      <S.Table>
        <S.HeadTable>
          <S.WrapLine>
            <S.HeadItem>Email</S.HeadItem>
            <S.HeadItem>Acesso</S.HeadItem>
          </S.WrapLine>
          <S.HeadItem style={{ textAlign: "right" }}>Ações</S.HeadItem>
        </S.HeadTable>
        <S.List>
          <ul className="list">
            <li className="item">
              <S.WrapLine>
                <span className="text">email@fdfsd.com</span>
                <span className="text-muted">funcionario</span>
              </S.WrapLine>
              <span className="actions">
                <Button size="small" icon="edit" color="primary" noText>
                  Editar
                </Button>
                <Button size="small" icon="delete" color="danger" noText>
                  Deletar
                </Button>
              </span>
            </li>
            <li className="item">
              <S.WrapLine>
                <span className="text">email@fdfsd.com</span>
                <span className="text-muted">funcionario</span>
              </S.WrapLine>
              <span className="actions">
                <Button size="small" icon="edit" color="primary" noText>
                  Editar
                </Button>
                <Button size="small" icon="delete" color="danger" noText>
                  Deletar
                </Button>
              </span>
            </li>
          </ul>
        </S.List>
      </S.Table>
    </S.Page>
  );
}
