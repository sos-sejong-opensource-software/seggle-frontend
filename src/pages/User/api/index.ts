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

const findPassword = (payload: FindPasswordRequest): Promise<AxiosResponse> => {
  // Todo: 전역 username 가져오도록 변경하기
  return api.post(`${API_URL}/apply_reset_password`, payload);
};

const resignUser = (): Promise<AxiosResponse> => {
  // Todo: 전역 username 가져오도록 변경하기
  return api.delete(`${API_URL}/{username}/`);
};

export { loginUser, registerUser, resetPassword, findPassword, resignUser };
