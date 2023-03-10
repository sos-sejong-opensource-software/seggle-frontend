import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/users`;

const loginUser = (payload: User): Promise<AxiosResponse<LoginResponse>> => {
  return api.post(`${API_URL}/login/`, payload);
};

const logoutUser = (): Promise<AxiosResponse> => {
  return api.post(`${API_URL}/logout/`);
};

const registerUser = (payload: RegisterRequest): Promise<AxiosResponse> => {
  return api.post(`${API_URL}/`, payload);
};

const resetPassword = (payload: ResetPasswordRequest): Promise<AxiosResponse> => {
  // Todo: 전역 username 가져오도록 변경하기
  return api.patch(`${API_URL}/{username}/`, payload);
};

const getUser = (username: string): Promise<AxiosResponse<UserResponse>> => {
  return api.get(`${API_URL}/${username}/`);
};

export { loginUser, logoutUser, registerUser, resetPassword, getUser };
