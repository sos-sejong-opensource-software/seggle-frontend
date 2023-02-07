import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/users/`;

const loginUser = (payload: User): Promise<AxiosResponse<LoginResponse>> => {
  return api.post(`${API_URL}/login/`, payload);
};

const registerUser = (payload: RegisterRequest): Promise<AxiosResponse> => {
  return api.post(`${API_URL}`, payload);
};

const resetPassword = (payload: ResetPasswordRequest): Promise<AxiosResponse> => {
  // Todo: 전역 username 가져오도록 변경하기
  return api.patch(`${API_URL}/{username}/`, payload);
};

export { loginUser, registerUser, resetPassword };
