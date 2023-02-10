import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin`;

const getProblems = (keyword: string): Promise<AxiosResponse<AdminAllProblemsResponse>> => {
  return api.get(`${API_URL}/problems?keyword=${keyword}`);
};

const deleteProblem = (problemId: string) => {
  return api.delete(`/problems/${problemId}`);
};

export { getProblems, deleteProblem };
