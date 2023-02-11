import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin/users`;

const getUser = (username: string): Promise<AxiosResponse<AdminUserResponse>> => {
  return api.get(`${API_URL}/${username}/`);
};

const editUserPrivilege = ({
  username,
  privilege,
}: EditUserRequest): Promise<AxiosResponse<AdminUserResponse>> => {
  return api.put(`${API_URL}/${username}/`, { privilege });
};

const deleteUser = (username: string) => {
  return api.delete(`${API_URL}/${username}`);
};

const getUsers = (
  keyword: string,
  currentPage: number
): Promise<AxiosResponse<AdminUserListResponse>> => {
  return api.get(`${API_URL}?keyword=${keyword}&page=${currentPage}`);
};

export { getUser, editUserPrivilege, deleteUser, getUsers };
