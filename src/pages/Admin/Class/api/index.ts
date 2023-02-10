import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin/class`;

const getClasses = (keyword: string): Promise<AxiosResponse<AdminClassListResponse>> => {
  return api.get(`${API_URL}?keyword=${keyword}`);
};

export { getClasses };
