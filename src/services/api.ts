import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-global-api.herokuapp.com",
});

export default api;
