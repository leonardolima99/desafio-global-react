import api from "./api";
import { AxiosResponse, AxiosError } from "axios";

type ResponseData = {
  token: string;
};

export async function signIn(
  email: string,
  senha: string
): Promise<AxiosResponse<ResponseData, any>> {
  try {
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("senha", senha);
    const response = await api.post("login", params);

    return response;
  } catch (error) {
    const err = error as Error | AxiosError;
    throw new AxiosError(err);
  }
}
