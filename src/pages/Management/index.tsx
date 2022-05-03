import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Loading } from "../../components/Loading";
import { Message } from "../../components/Message";
import { DataProps, UserControl } from "../../components/UserControl";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";
import * as S from "./styles";

export type AwaitMessageParams = {
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  time?: number;
};

export function awaitMessage({ setValue, time }: AwaitMessageParams) {
  setValue(true);
  time &&
    setTimeout(() => {
      setValue(false);
    }, time);
}

export function Management() {
  const [visible, setVisible] = useState<boolean>(false);
  const [action, setAction] = useState<"new" | "edit">("new");
  const [data, setData] = useState<DataProps>({} as DataProps);
  const [users, setUsers] = useState<DataProps[]>([] as DataProps[]);
  const [reload, setReload] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [messageVisible, setMessageVisible] = useState<boolean>(false);

  const { message, updateMessage } = useAuth();

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

    updateMessage({ new_message: [response.data.message], type: "success" });

    awaitMessage({
      setValue: setMessageVisible,
      time: 5000,
    });
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
          awaitMessage={awaitMessage}
          messageVisible={messageVisible}
          setMessageVisible={setMessageVisible}
        />
      ) : null}
      {loading ? <Loading /> : null}
      {messageVisible && (
        <Message message={message.new_message} type={message.type} />
      )}
      <S.Table>
        <S.HeadTable>
          {/* <S.WrapLine> */}
          <S.HeadEmail>Email</S.HeadEmail>
          <S.HeadRole>Acesso</S.HeadRole>
          {/* </S.WrapLine> */}
          <S.HeadAction>Ações</S.HeadAction>
        </S.HeadTable>
        <S.List>
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
