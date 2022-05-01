import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

type Props = {
  children: JSX.Element;
  nivel_acesso?: "funcionario" | "administrador";
};

export function RequireAuth({ nivel_acesso, children }: Props) {
  const { signed, user } = useAuth();

  if (signed) {
    if (user?.nivel_acesso === "administrador") {
      return children;
    } else if (user?.nivel_acesso === nivel_acesso) {
      return children;
    }
  }

  return <Navigate to="/signin" />;
}
