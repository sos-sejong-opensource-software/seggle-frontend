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

const deleteUser = (username: string) => {
  return api.delete(`${API_URL}/users/${username}`);
};

const getUsers = (keyword: string): Promise<AxiosResponse<AdminUserListResponse>> => {
  return api.get(`${API_URL}/users?keyword=${keyword}`);
};

export { getUser, editUserPrivilege, deleteUser, getUsers };
