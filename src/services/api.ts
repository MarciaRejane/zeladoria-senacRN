import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { QrCodeIcon } from "phosphor-react-native";

export interface User {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
  is_superuser: boolean;
  groups?: number[];
  nome?: string;
  profile?: {
    profile_picture?: string | null;
  };
}

//Resposta de login da API
export interface LoginResponse {
  username: string;
  password?: string;
  token: string;
  user_data: User;
}

//Extrutura de uma sala
export interface Sala {
  id: number;
  nome_numero: string;
  capacidade: number;
  descricao: string;
  localizacao: string;
  status_limpeza: "Limpa" | "Limpeza Pendente";
  ultima_limpeza_data_hora: string | null;
  ultima_limpeza_funcionario: string | null;
  ultima_limpeza_duracao_minutos?: number;
  qr_code_id: string;
  imagem?: string;
  responsaveis?: string[];
  validade_limpeza_horas?: number;
  instrucoes?: string;
  ativa: boolean;
}

export interface CreateSalaData {
  nome_numero: string;
  capacidade: number;
  descricao: string;
  localizacao: string;
}

export interface LimpezaRegistro {
  id: number;
  sala: string;
  sala_nome: string;
  data_hora_inicio: string;
  data_hora_fim: string | null;
  funcionario_responsavel: {
    id: number;
    username: string;
  };
  observacoes: string;
  foto: {
    id: number;
    imagem: string;
    timeStamp: string;
  }[];
}

export interface CreateUserData {
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  is_superuser?: boolean;
  is_staff?: boolean;
  groups?: number[];
  nome?: string;
}

//Estrutura para trocar senha
export interface ChangePasswordData {
  old_password: string;
  new_password: string;
  confirm_new_password: string;
}

//Estrutura de grupo
export interface Group {
  id: number;
  name: string;
}

const api = axios.create({
  baseURL: "https://zeladoria.tsr.net.br/api/",
});

//Interceptor para adicionar automaticamente o token salvo no AsyncStorage
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

  listUsers: (params?: {
    username?: string;
    email?: string;
    is_superuser?: boolean;
    group?: string;
  }) => api.get<User[]>("accounts/list_users/", { params }),

  create: (userData: CreateUserData) =>
    api.post<User>("accounts/create_user/", userData),

  updateProfile: (data: FormData) =>
    api.put<User>("accounts/profile/", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),
  changePassword: (data: ChangePasswordData) =>
    api.post("accounts/change_password/", data),

  // Adicionado o novo endpoint para listar grupos
  listGroups: () => api.get<Group[]>("accounts/list_groups/"),
};

// Se a API tiver um endpoint para contar limpezas por funcionário (zeladoria)
// precisaremos adicionar isso aqui. Por enquanto, vou criar um placeholder.
export const reports = {
  // Ou um novo objeto 'zeladoria'
  getCleaningsCount: (userId: number) =>
    api.get<{ count: number }>(`reports/cleanings_by_user/${userId}/`),
};

export const salas = {
  // A função de listagem já aceita os parâmetros de filtro
  list: (
    params: {
      ativa?: boolean;
      nome_numero?: string;
      localizacao?: string;
      capacidade_min?: number;
      capacidade_max?: number;
      responsavel_username?: string;
    } = {}
  ) => api.get<Sala[]>("salas/", { params }),

  create: (data: FormData) => {
    return api.post<Sala>("salas/", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  //Detalhes da sala pelo QR Code
  getDetails: (qr_code_id: string) => api.get<Sala>(`salas/${qr_code_id}`),

  //Atualizar sala
  update: (qr_code_id: string, data: FormData) =>
    api.put<Sala>(`sala/${qr_code_id}/`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  delete: (qr_code_id: string) => api.delete(`salas/${qr_code_id}`),

  //Iniciar limpeza
  startClean: (qr_code_id: string) =>
    api.post<LimpezaRegistro>(`salas/${qr_code_id}/iniciar_limpeza/`),

  //Finalizar a limpeza
  finishClean: (qr_code_id: string, observacoes?: string) =>
    api.post<LimpezaRegistro>(`salas/${qr_code_id}/concluir_limpeza/`, {
      observacoes,
    }),

  //Marcar como suja
  marckAsDirty: (qr_code_id: string, observacoes?: string) =>
    api.post(`salas/${qr_code_id}/marcar_como_suja`, {
      observacoes,
    }),
};

export const limpezas = {
  list: (params?: {
    sala_uuid?: string;
    sala_nome?: string;
    funcionario_username?: string;
    data_hora_limpeza_after?: string;
    data_hora_limpeza_before?: string;
  }) => api.get<LimpezaRegistro[]>("limpezas/", { params }),
};

export const fotos = {
  addPhoto: (data: FormData) =>
    api.post("fotos_limpeza/", data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  listPhoto: () => api.get("fotos_limpeza/"),

  getPhoto: (id: number) => api.get(`fotos_limpeza/${id}/`),
  deletePhoto: (id: number) => api.delete(`foto_limpeza/${id}`),
};

export const notificacoes = {
  list: () => api.get("notificacoes/"),
  markAsRead: (id: number) => api.post(`notificacoes/${id}/marcar_como_lida/`),
  markAllAsRead: () => api.post("notificacoes/marcar_todas_como_lidas/"),
};
