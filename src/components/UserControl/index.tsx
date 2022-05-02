import { useEffect, useState } from "react";
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
}: UserControlProps) {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [nivelAcesso, setNivelAcesso] = useState<
    "funcionario" | "administrador"
  >("funcionario");

  const handleSubmit = async (id?: number) => {
    setLoading(true);
    if (action === "edit") {
      await api.put(`users/${id}`, {
        email,
        senha,
        nivel_acesso: nivelAcesso,
      });
    } else if (action === "new") {
      const response = await api.post("users", {
        email,
        senha,
        nivel_acesso: nivelAcesso,
      });
      setData({} as DataProps);
    }
    setVisible(false);
    setReload(!reload);
    setLoading(false);
  };

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
            icon="none"
            color="danger"
            size="small"
            onClick={(e) => {
              e.preventDefault();
              setVisible(false);
            }}
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
        />
        <S.Input
          type="password"
          className="input"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <S.Wrap>
          <S.Input
            type="radio"
            className="input"
            name="nivelAcesso"
            id="funcionario"
            checked={nivelAcesso === "funcionario"}
            onChange={(e) => setNivelAcesso("funcionario")}
          />
          <S.Label htmlFor="funcionario">Funcionário</S.Label>

          <S.Input
            type="radio"
            className="input"
            name="nivelAcesso"
            id="administrador"
            checked={nivelAcesso === "administrador"}
            onChange={() => setNivelAcesso("administrador")}
          />
          <S.Label htmlFor="administrador">Administrador</S.Label>
        </S.Wrap>
        <Button icon="none" color="primary" size="large">
          {action === "new" ? "Adicionar usuário" : "Atualizar usuário"}
        </Button>
      </S.Form>
    </S.Page>
  );
}
