import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin`;

const getUser = (username: string): Promise<AxiosResponse<AdminUserResponse>> => {
  return api.get(`${API_URL}/users/${username}/`);
};

const editUserPrivilege = ({
  username,
  privilege,
}: EditUserRequest): Promise<AxiosResponse<AdminUserResponse>> => {
  return api.put(`${API_URL}/users/${username}/`, { privilege });
};

const getProblems = (keyword: string): Promise<AxiosResponse<AdminAllProblemsResponse>> => {
  return api.get(`${API_URL}/problems?keyword=${keyword}`);
};

const deleteProblem = (problemId: string) => {
  return api.delete(`/problems/${problemId}`);
};

export { getUser, editUserPrivilege, getProblems, deleteProblem };
