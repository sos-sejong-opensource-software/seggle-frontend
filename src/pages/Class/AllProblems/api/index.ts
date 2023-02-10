import { api } from '@/api';

const API_URL = `/problems`;

const getAllProblemList = ({ keyword }: { keyword: string }) => {
  return api.get(`${API_URL}?keyword=${keyword}`);
};

const getProblem = (problemId: string) => {
  return api.get(`${API_URL}/${problemId}`);
};

const deleteProblem = (problemId: string) => {
  return api.delete(`${API_URL}/${problemId}`);
};

const editProblemPublic = (problemId: string) => {
  return api.post(`${API_URL}/${problemId}/check/`);
};

export { getAllProblemList, getProblem, editProblemPublic, deleteProblem };
