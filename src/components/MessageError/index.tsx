import * as S from "./styles";

type Props = {
  message: string;
};

export function MessageError({ message }: Props) {
  return (
    <S.MessageError>
      <S.Span>{message}</S.Span>
    </S.MessageError>
  );
}
