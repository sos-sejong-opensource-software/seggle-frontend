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

const getClasses = (keyword: string): Promise<AxiosResponse<AdminAllClassesResponse>> => {
  return api.get(`${API_URL}/class?keyword=${keyword}`);
};

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

const deleteFaq = (faqId: string) => {
  return api.delete(`${API_URL}/faqs/${faqId}`);
};

const editFaqVisible = (payload: { id: number }) => {
  return api.post(`${API_URL}/faqs/check/`, payload);
};

const getFaqs = (keyword: string): Promise<AxiosResponse<AdminFaqListResponse>> => {
  return api.get(`${API_URL}/faqs?keyword=${keyword}`);
};

const createFaq = (payload: CreateEditFaqRequest) => {
  return api.post(`${API_URL}/faqs/`, payload);
};

const editFaq = (faqId: string, payload: CreateEditFaqRequest) => {
  return api.patch(`${API_URL}/faqs/${faqId}/`, payload);
};

const getFaqById = (faqId: string): Promise<AxiosResponse<AdminFaqResponse>> => {
  return api.get(`${API_URL}/faqs/${faqId}/`);
};

export {
  getUser,
  editUserPrivilege,
  getProblems,
  deleteProblem,
  deleteAnnouncement,
  getAnnouncements,
  editAnnouncementSwitch,
  getClasses,
  createAnnouncement,
  editAnnouncement,
  getAnnouncementById,
  deleteFaq,
  editFaqVisible,
  getFaqs,
  createFaq,
  editFaq,
  getFaqById,
};
