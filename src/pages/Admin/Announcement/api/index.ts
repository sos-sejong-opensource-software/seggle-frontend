import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin/announcements`;

const getAnnouncements = (
  keyword: string,
  currentPage: number
): Promise<AxiosResponse<AdminAnnouncementListResponse>> => {
  return api.get(`${API_URL}?keyword=${keyword}&page=${currentPage}`);
};

const deleteAnnouncement = (announcementId: string) => {
  return api.delete(`${API_URL}/${announcementId}`);
};

const editAnnouncementSwitch = ({
  announcementId,
  payload,
}: {
  announcementId: string;
  payload: EditAnnouncementSwitchRequest;
}) => {
  return api.put(`${API_URL}/${announcementId}/check/`, payload);
};

const createAnnouncement = (payload: CreateEditAnnouncementRequest) => {
  return api.post(`${API_URL}/`, payload);
};

const editAnnouncement = (announcementId: string, payload: CreateEditAnnouncementRequest) => {
  return api.put(`${API_URL}/${announcementId}/`, payload);
};

const getAnnouncementById = (
  announcementId: string
): Promise<AxiosResponse<AdminAnnouncementResponse>> => {
  return api.get(`${API_URL}/${announcementId}/`);
};

export {
  deleteAnnouncement,
  getAnnouncements,
  editAnnouncementSwitch,
  createAnnouncement,
  editAnnouncement,
  getAnnouncementById,
};
