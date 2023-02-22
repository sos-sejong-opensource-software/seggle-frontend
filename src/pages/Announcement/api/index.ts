import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = '/announcements';

const getAnnouncement = (currentPage: number): Promise<AxiosResponse<AnnouncementResponse>> => {
  return api.get(`${API_URL}?page=${currentPage}`);
};

const getAnnouncementDetail = (announcementId: string) => {
  return api.get(`${API_URL}/${announcementId}`);
};

export { getAnnouncement, getAnnouncementDetail };
