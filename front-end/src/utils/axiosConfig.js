import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // URL do seu back-end
  timeout: 5000, // Timeout de 5 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para configurar o token JWT no cabeçalho de autorização
const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export { axiosInstance, setAuthToken };