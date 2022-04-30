import { ReactNode } from "react";
import { Icon } from "../Icon";

import * as S from "./styles";

export type ButtonProps = {
  icon: "add" | "delete" | "edit" | "add" | "login" | "save";
  size: "small" | "large";
  children: ReactNode;
};

export function Button({ icon, size, children }: ButtonProps) {
  return (
    <S.Button size={size}>
      <Icon name={icon} size={24} color="#f5f5f5" />
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  );
}
