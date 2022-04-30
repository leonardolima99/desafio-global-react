import api from "./api";
import jwt_decode, { JwtPayload } from "jwt-decode";

export async function signIn(email: string, senha: string) {
  const params = new URLSearchParams();
  params.append("email", email);
  params.append("senha", senha);
  const response = await api.post("login", params);
  localStorage.setItem("token", response.data.token);
}

export async function isSigned() {
  const token = localStorage.getItem("token");

  if (!token) return false;

  const decodedToken = jwt_decode<JwtPayload>(token);

  if ((decodedToken.exp as number) * 1000 < Date.now()) {
    console.log("token expired");
    return false;
  } else {
    console.log("valid");
    return true;
  }
}
