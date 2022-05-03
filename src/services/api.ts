import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-global-api.herokuapp.com",
  /* baseURL: "http://192.168.0.104:3001", */
});

export default api;
