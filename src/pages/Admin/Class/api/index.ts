import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin/classs`;

const getClasses = (keyword: string): Promise<AxiosResponse<AdminAllClassesResponse>> => {
  return api.get(`${API_URL}?keyword=${keyword}`);
};

export { getClasses };
