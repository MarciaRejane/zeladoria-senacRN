import axios from 'axios';

const API_BASE_URL = 'http://192.168.0.19:8000/api/accounts'; 

export const loginUsuario = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, {
      username,
      password,
    }, {
      headers: { 'Content-Type': 'application/json' },
    });

    // Retorna token e dados do usuário
    return response.data;
  } catch (error: any) {
    console.error('Erro no login:', error.response?.data || error.message);
    throw error;
  }
};
