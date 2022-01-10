import axios from "axios";

const apis = {
<<<<<<< HEAD
  development: "http://localhost:4000",
  production: "https://projetomariasdapenha.herokuapp.com/",
=======
  development: "http://localhost:4000/api/v1",
  production: "https://mulheresdapenha.herokuapp.com/api/v1",
>>>>>>> debc77f06fb001da4604bb2ccf46f0d96e3f9445
};

// Pré-configurando a URL padrão do nosso backend em uma instância do Axios
const api = axios.create({
  baseURL: apis[process.env.NODE_ENV],
});

// Configura a instância do Axios para injetar o cabeçalho de autenticação antes de cada requisição
api.interceptors.request.use((config) => {
  // Verifica se já temos as informações do usuário logado no localStorage
  const storedUser = localStorage.getItem("loggedInUser");

  const loggedInUser = JSON.parse(storedUser || '""');

  if (loggedInUser.token) {
    config.headers = {
      Authorization: `Bearer ${loggedInUser.token}`,
    };
  }

  return config;
});

export default api;
