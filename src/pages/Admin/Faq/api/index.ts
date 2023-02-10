import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin`;

const deleteFaq = (faqId: string) => {
  return api.delete(`${API_URL}/faqs/${faqId}`);
};

const editFaqVisible = (payload: { id: number }) => {
  return api.post(`${API_URL}/faqs/check/`, payload);
};

const getFaqs = (): Promise<AxiosResponse<AdminFaqListResponse>> => {
  return api.get(`${API_URL}/faqs`);
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

export { deleteFaq, editFaqVisible, getFaqs, createFaq, editFaq, getFaqById };
