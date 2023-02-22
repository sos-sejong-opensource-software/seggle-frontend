import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin/class`;

const getClasses = (
  keyword: string,
  currentPage: number
): Promise<AxiosResponse<AdminClassListResponse>> => {
  return api.get(`${API_URL}?keyword=${keyword}&page=${currentPage}`);
};

export { getClasses };
