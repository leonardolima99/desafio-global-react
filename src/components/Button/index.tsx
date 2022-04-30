import { ReactNode } from "react";
import { Icon } from "../Icon";
import "./styles.css";

type ButtonProps = {
  icon: "add" | "delete" | "edit" | "add" | "login" | "save";
  size: "small" | "large";
  children: ReactNode;
};

export function Button({ icon, size, children }: ButtonProps) {
  return (
    <button className={`button ${size == "large" ? "py-1" : "py-2"}`}>
      <Icon name={icon} size={24} color="#f5f5f5" />
      <span className="button-text">{children}</span>
    </button>
  );
}
