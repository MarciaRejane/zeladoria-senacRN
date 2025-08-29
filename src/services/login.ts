
import axios from 'axios';

const API_BASE_URL = 'https://zeladoria.tsr.net.br/api/accounts';


export const loginUsuario = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, {
      username,  // ou "email": username
      password,
    });
    return response.data;
  } catch (error: any) {
    console.error('Erro no login:', error.response?.data || error.message);
    throw error;
  }
};
