import { ReactNode } from "react";
import { Icon } from "../Icon";

import * as S from "./styles";

export type ButtonProps = {
  icon: "add" | "delete" | "edit" | "add" | "login" | "save" | "none";
  size: "small" | "large";
  color: "primary" | "danger";
  noText?: boolean;
  children: ReactNode;
};

export function Button({
  icon,
  size,
  color,
  noText = false,
  children,
}: ButtonProps) {
  return (
    <S.Button
      size={size}
      style={
        color === "danger"
          ? { backgroundColor: "#FF2626" }
          : { backgroundColor: "#008BEF" }
      }
    >
      {icon !== "none" ? <Icon name={icon} size={24} color="#f5f5f5" /> : null}
      {noText === false ? <S.ButtonText>{children}</S.ButtonText> : null}
    </S.Button>
  );
}
