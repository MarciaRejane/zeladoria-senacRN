import axios from 'axios';

const API_URL = 'https://zeladoria.tsr.net.br/api';

export async function marcarSalaComoLimpa(salaId: number, token: string) {
  return axios.post(
    `${API_URL}/salas/${salaId}/limpar/`,
    {},
    { headers: { Authorization: `Token ${token}` } }
  );
}
