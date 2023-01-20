import { AxiosResponse } from 'axios';

import { api } from '@/api';

type RefreshRepsonse = {
  access: string;
};

const API_URL = `/users/login/refresh/`;

const getAccessToken = (refresh: string): Promise<AxiosResponse<RefreshRepsonse>> => {
  return api.post(`${API_URL}`, { refresh });
};

export { getAccessToken };
