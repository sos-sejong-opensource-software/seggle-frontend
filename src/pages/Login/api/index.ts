import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/users/login/`;

const loginUser = (payload: User): Promise<AxiosResponse<LoginResponse>> => {
  return api.post(`${API_URL}`, payload);
};

export { loginUser };
