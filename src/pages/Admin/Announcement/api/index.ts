import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin`;

const getAnnouncements = (
  keyword: string
): Promise<AxiosResponse<AdminAnnouncementListResponse>> => {
  return api.get(`${API_URL}/announcements?keyword=${keyword}`);
};

const deleteAnnouncement = (announcementId: string) => {
  return api.delete(`${API_URL}/announcements/${announcementId}`);
};

const editAnnouncementSwitch = ({
  announcementId,
  payload,
}: {
  announcementId: string;
  payload: EditAnnouncementSwitchRequest;
}) => {
  return api.put(`${API_URL}/announcements/${announcementId}/check/`, payload);
};

const createAnnouncement = (payload: CreateEditAnnouncementRequest) => {
  return api.post(`${API_URL}/announcements/`, payload);
};

const editAnnouncement = (announcementId: string, payload: CreateEditAnnouncementRequest) => {
  return api.put(`${API_URL}/announcements/${announcementId}/`, payload);
};

const getAnnouncementById = (
  announcementId: string
): Promise<AxiosResponse<AdminAnnouncementResponse>> => {
  return api.get(`${API_URL}/announcements/${announcementId}/`);
};

export {
  deleteAnnouncement,
  getAnnouncements,
  editAnnouncementSwitch,
  createAnnouncement,
  editAnnouncement,
  getAnnouncementById,
};
