import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { AwaitMessageParams } from "../../pages/Management";
import api from "../../services/api";
import { Button } from "../Button";

import * as S from "./styles";

export type DataProps = {
  id: number;
  email: string;
  nivel_acesso: "funcionario" | "administrador";
};

export type UserControlProps = {
  action: "new" | "edit";
  data?: DataProps;
  setData: React.Dispatch<React.SetStateAction<DataProps>>;
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  users: DataProps[];
  awaitMessage: ({ setValue, time }: AwaitMessageParams) => void;
  messageVisible: boolean;
  setMessageVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

type Error = {
  msg: string;
};

export function UserControl({
  action,
  data,
  setData,
  reload,
  setReload,
  visible,
  setVisible,
  loading,
  setLoading,
  users,
  awaitMessage,
  messageVisible,
  setMessageVisible,
}: UserControlProps) {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [nivelAcesso, setNivelAcesso] = useState<
    "funcionario" | "administrador"
  >("funcionario");

  const { updateMessage } = useAuth();

  const handleSubmit = async (id?: number) => {
    setLoading(true);
    if (!email || !senha || !nivelAcesso) {
      setLoading(false);
      return false;
    }
    if (action === "edit") {
      api
        .put(`users/${id}`, {
          email,
          senha,
          nivel_acesso: nivelAcesso,
        })
        .then((response) => {
          updateMessage({
            new_message: ["Usuário editado com sucesso."],
            type: "success",
          });
          setVisible(false);
          setReload(!reload);
          setLoading(false);
          awaitMessage({ setValue: setMessageVisible, time: 5000 });
        })
        .catch((error) => {
          setLoading(false);
          const errors = error.response.data.errors;
          console.log(error);
          updateMessage({
            new_message: errors.map((error: Error) => error.msg),
            type: "error",
          });
          setMessageVisible(true);
        });
    } else if (action === "new") {
      if (users.find((user: DataProps) => user.email === email)) {
        setLoading(false);
        updateMessage({
          new_message: ["Este usuário já existe."],
          type: "error",
        });
        return false;
      }

      api
        .post("users", {
          email,
          senha,
          nivel_acesso: nivelAcesso,
        })
        .then((response) => {
          updateMessage({
            new_message: ["Usuário criado com sucesso."],
            type: "success",
          });
          setVisible(false);
          setReload(!reload);
          setLoading(false);
          awaitMessage({ setValue: setMessageVisible, time: 5000 });
        })
        .catch((error) => {
          setLoading(false);
          const errors = error.response.data.errors;
          console.log(errors.map((error: Error) => error.msg));
          updateMessage({
            new_message: errors.map((error: Error) => error.msg),
            type: "error",
          });
          setMessageVisible(true);
        });
      setData({} as DataProps);
    }
  };

  function handleClose(e: FormEvent) {
    e.preventDefault();
    setVisible(false);
    setMessageVisible(false);
  }

  useEffect(() => {
    if (action === "edit") {
      data && setEmail(data.email);
      data && setNivelAcesso(data.nivel_acesso);
    }
  }, [action]);
  return (
    <S.Page>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(data?.id);
        }}
      >
        <S.TitleWrap>
          <S.Title>Novo usuário</S.Title>
          <Button
            type="reset"
            icon="none"
            color="danger"
            size="small"
            onClick={handleClose}
          >
            Fechar
          </Button>
        </S.TitleWrap>
        <S.Input
          type="email"
          className="input"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <S.Input
          type="password"
          className="input"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <S.Wrap>
          <S.Input
            type="radio"
            className="input"
            name="nivelAcesso"
            id="funcionario"
            checked={nivelAcesso === "funcionario"}
            onChange={(e) => setNivelAcesso("funcionario")}
            required
          />
          <S.Label htmlFor="funcionario">Funcionário</S.Label>

          <S.Input
            type="radio"
            className="input"
            name="nivelAcesso"
            id="administrador"
            checked={nivelAcesso === "administrador"}
            onChange={() => setNivelAcesso("administrador")}
            required
          />
          <S.Label htmlFor="administrador">Administrador</S.Label>
        </S.Wrap>
        <Button type="submit" icon="none" color="primary" size="large">
          {action === "new" ? "Adicionar usuário" : "Atualizar usuário"}
        </Button>
      </S.Form>
    </S.Page>
  );
}
