import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { MessageError } from "../../components/MessageError";
import { DataProps, UserControl } from "../../components/UserControl";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";
import * as S from "./styles";

export function Management() {
  const [visible, setVisible] = useState<boolean>(false);
  const [action, setAction] = useState<"new" | "edit">("new");
  const [data, setData] = useState<DataProps>({} as DataProps);
  const [users, setUsers] = useState<DataProps[]>([] as DataProps[]);
  const [reload, setReload] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [messageInfo, setMessageInfo] = useState<string>("");

  const { message } = useAuth();

  function handleNewUser() {
    action !== "new" ? setAction("new") : null;
    setVisible(true);
  }
  function handleEditUser(
    id: number,
    email: string,
    nivel_acesso: "funcionario" | "administrador"
  ) {
    action !== "edit" ? setAction("edit") : null;
    setData({ id, email, nivel_acesso });
    setVisible(true);
  }
  async function handleDeleteUser(id: number) {
    setLoading(true);
    const response = await api.delete(`users/${id}`);
    setReload(!reload);
    setLoading(false);

    setMessageInfo(response.data.message);

    setTimeout(() => {
      setMessageInfo("");
    }, 5000);
  }

  async function listUsers() {
    const response = await api.get("users");

    setUsers(response.data);
  }

  useEffect(() => {
    listUsers();
  }, [reload]);

  return (
    <S.Page>
      <S.Header>
        <S.Title>Usuários</S.Title>
        <Button
          size="large"
          icon="none"
          color="primary"
          onClick={handleNewUser}
        >
          Novo usuário
        </Button>
      </S.Header>
      {visible ? (
        <UserControl
          action={action}
          data={data}
          setData={setData}
          reload={reload}
          setReload={setReload}
          visible={visible}
          setVisible={setVisible}
          loading={loading}
          setLoading={setLoading}
          users={users}
        />
      ) : null}
      {loading ? <Loading /> : null}
      {message && <MessageError message={message} />}
      <S.Table>
        <S.HeadTable>
          {/* <S.WrapLine> */}
          <S.HeadEmail>Email</S.HeadEmail>
          <S.HeadRole>Acesso</S.HeadRole>
          {/* </S.WrapLine> */}
          <S.HeadAction>Ações</S.HeadAction>
        </S.HeadTable>
        <S.List>
          {messageInfo ? (
            <S.ItemMessage>
              <S.TextMessage>{messageInfo}</S.TextMessage>
            </S.ItemMessage>
          ) : null}
          {users.map((usr) => (
            <S.Item key={usr.email}>
              {/* <S.WrapLine> */}
              <S.Text>{usr.email}</S.Text>
              <S.TextMuted>{usr.nivel_acesso}</S.TextMuted>
              {/* </S.WrapLine> */}
              <S.Actions>
                <Button
                  noText
                  size="small"
                  icon="edit"
                  color="primary"
                  onClick={() =>
                    handleEditUser(usr.id, usr.email, usr.nivel_acesso)
                  }
                >
                  Editar
                </Button>
                <Button
                  size="small"
                  icon="delete"
                  color="danger"
                  noText
                  onClick={() => {
                    handleDeleteUser(usr.id);
                  }}
                >
                  Deletar
                </Button>
              </S.Actions>
            </S.Item>
          ))}
        </S.List>
      </S.Table>
    </S.Page>
  );
}
