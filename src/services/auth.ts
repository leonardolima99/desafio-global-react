import api from "./api";
import { AxiosResponse, AxiosError, Axios } from "axios";

type ResponseData = {
  token: string;
};

export async function signIn(email: string, senha: string) {
  try {
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("senha", senha);
    const response = await api.post("login", params);

    return response;
  } catch (error) {
    console.log("ass", error);
  }
}
