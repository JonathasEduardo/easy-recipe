import axios from 'axios';
import { axiosInstance, setAuthToken } from '../utils/axiosConfig';

const BASE_URL = "http://localhost:4000"; // URL base para o ambiente local

// Exemplo de uso para fazer uma requisição POST de login
export const loginUser = async (credentials) => {
  try {
    const { data } = await axiosInstance.post('/login', credentials);
    return data;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

// Exemplo de uso para configurar o token JWT após o login
export const handleSuccessfulLogin = (token) => {
  setAuthToken(token);
  // Aqui você pode adicionar outras operações após o login, como redirecionar o usuário, etc.
};

export async function createUser(parameters) {
  const link = `${BASE_URL}/user`;
  try {
    const { data } = await axios.post(link, parameters);
    return data;
  } catch (error) {
    console.error('Erro ao criar o usuario:', error);
    throw error;
  }
}

export async function updateUser(id, parameters) {
  const link = `${BASE_URL}/user/${id}`;
  try {
    const { data } = await axios.put(link, parameters);
    return data;
  } catch (error) {
    console.error('Erro ao atualizar o usuario:', error);
    throw error;
  }
}

export async function deleteUser(id) {
  const link = `${BASE_URL}/user/${id}`;
  try {
    const { data } = await axios.delete(link);
    return data;
  } catch (error) {
    console.error('Erro ao deletar o usuario:', error);
    throw error;
  }
}