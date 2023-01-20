import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/users/`;

const loginUser = (payload: User): Promise<AxiosResponse<LoginResponse>> => {
  return api.post(`${API_URL}/login`, payload);
};

const registerUser = (payload: RegisterRequest): Promise<AxiosResponse> => {
  return api.post(`${API_URL}`, payload);
};

export { loginUser, registerUser };
