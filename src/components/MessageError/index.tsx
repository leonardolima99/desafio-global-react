import { useAuth } from "../../contexts/auth";
import * as S from "./styles";

type Props = {
  message: string;
};

export function MessageError({ message }: Props) {
  const { updateMessage } = useAuth();
  setTimeout(() => {
    updateMessage("");
  }, 5000);

  return (
    <S.MessageError>
      <S.Span>{message}</S.Span>;
    </S.MessageError>
  );
}
