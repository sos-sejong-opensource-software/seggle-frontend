import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin/problems`;

const getProblems = (
  keyword: string,
  currentPage: number
): Promise<AxiosResponse<AdminProblemListResponse>> => {
  return api.get(`${API_URL}?keyword=${keyword}&page=${currentPage}`);
};

const deleteProblem = (problemId: string) => {
  return api.delete(`/problems/${problemId}`);
};

export { getProblems, deleteProblem };
