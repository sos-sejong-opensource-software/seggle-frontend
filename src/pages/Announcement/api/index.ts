import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = '/announcements';

const getAnnouncement = (): Promise<AxiosResponse<AnnouncementResponse>> => {
  return api.get(`${API_URL}`);
};

const getAnnouncementDetail = (announcementId: string) => {
  return api.get(`${API_URL}/${announcementId}`);
};

export { getAnnouncement, getAnnouncementDetail };
