import * as S from "./styles";

type Props = {
  message: Array<string>;
  type: "error" | "success" | "info" | undefined;
};

export function Message({ message, type }: Props) {
  switch (type) {
    case "error":
      return (
        <S.MessageWrap>
          {message.map((text) => (
            <S.MessageError key={text}>
              <S.Span>{text}</S.Span>
            </S.MessageError>
          ))}
        </S.MessageWrap>
      );

    case "success":
      return (
        <S.MessageWrap>
          {message.map((text) => (
            <S.MessageSuccess key={text}>
              <S.Span>{text}</S.Span>
            </S.MessageSuccess>
          ))}
        </S.MessageWrap>
      );

    case "info":
      return (
        <S.MessageWrap>
          {message.map((text) => (
            <S.MessageInfo key={text}>
              <S.Span>{text}</S.Span>
            </S.MessageInfo>
          ))}
        </S.MessageWrap>
      );
    default:
      return null;
    /* return (
        <S.MessageWarning>
          <S.Span>Algo inesperado aconteceu.</S.Span>;
        </S.MessageWarning>
      ); */
  }
}
