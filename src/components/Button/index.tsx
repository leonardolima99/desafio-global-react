import { HTMLInputTypeAttribute, ReactNode } from "react";
import { Icon } from "../Icon";

import * as S from "./styles";

export interface ButtonProps {
  icon: "add" | "delete" | "edit" | "login" | "save" | "none";
  size: "small" | "large";
  color: "primary" | "danger";
  noText?: boolean;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export function Button({
  icon,
  size,
  color,
  noText = false,
  children,
  onClick,
  type = "submit",
  ...rest
}: ButtonProps) {
  return (
    <S.Button
      size={size}
      style={
        color === "danger"
          ? { backgroundColor: "#FF2626" }
          : { backgroundColor: "#008BEF" }
      }
      onClick={onClick}
      type={type}
      {...rest}
    >
      {icon !== "none" ? <Icon name={icon} size={24} color="#f5f5f5" /> : null}
      {noText === false ? <S.ButtonText>{children}</S.ButtonText> : null}
    </S.Button>
  );
}
