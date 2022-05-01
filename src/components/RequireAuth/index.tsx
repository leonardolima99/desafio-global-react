import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

type Props = {
  children: JSX.Element;
};

export function RequireAuth({ children }: Props) {
  const { signed } = useContext(AuthContext);

  if (!signed) {
    return <Navigate to="/signin" />;
  }

  return children;
}
