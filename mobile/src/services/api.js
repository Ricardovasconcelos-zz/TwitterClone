import axios from "axios";

const api = axios.create({
  //No link abaixo se você não estiver em um mac é recomendado colocar seu ip, 
  //exemplo ('http://113.123.0.2:3000')
  baseURL: "http://localhost:3000"
});

export default api;
