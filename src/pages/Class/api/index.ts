import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/class/`;

const getClassList = (): Promise<AxiosResponse<ClassListResponse>> => {
  return api.get(`/users${API_URL}`);
};

export { getClassList };
