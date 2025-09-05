import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Use } from "react-native-svg";

export interface User {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
}

export interface LoginResponse {
  username: string;
  password?: string;
  token: string;
  user_data: User;
}

export interface Sala {
  id: number;
  nome_numero: string;
  capacidade: number;
  descricao: string;
  localizacao: string;
  status_limpeza: "Limpa" | "Limpeza Pendente";
  ultima_limpeza_data_hora: string | null;
  ultima_limpeza_funcionario: string | null;
}

export interface CreateSalaData {
  nome_numero: string;
  capacidade: number;
  descricao: string;
  localizacao: string;
}

export interface LimpezaRegistro {
  id: number;
  sala: number;
  sala_nome: string;
  data_hora_limpeza: string;
  funcionario_responsavel: {
    id: number;
    username: string;
  };
  observacoes: string;
}

export interface CreateUserData {
  username: string;
  email?: string;
  password?: string;
  confirm_password?: string;
  is_staff?: boolean;
}

const api = axios.create({
  baseURL: "https://zeladoria.tsr.net.br/api/",
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const accounts = {
  login: (username: string, password: string) =>
    api.post<LoginResponse>("accounts/login/", { username, password }),
  getCurrentUser: () => api.get<User>("accounts/current_user/"),

  create: (userData: CreateUserData) =>
    api.post<User>("accounts/create_user/", userData),
  listUsers: () => api.get<User[]>("accounts/list_users/"),
};

export const salas = {
  list: (params: { localizacao?: string; status_limpeza?: string } = {}) =>
    api.get<Sala[]>("salas/", { params }),

  create: (data: CreateSalaData) => {
    return api.post<Sala>("salas/", data);
  },

  clean: (id: number, observacoes?: { observacoes: string }) =>
    api.post<LimpezaRegistro>(`salas/${id}/marcar_como_limpa/`, observacoes),

  delete: (id: number) => api.delete(`salas/${id}/`),
};
