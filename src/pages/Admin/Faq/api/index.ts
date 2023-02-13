import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin/faqs`;

const deleteFaq = (faqId: string) => {
  return api.delete(`${API_URL}/${faqId}`);
};

const editFaqVisible = (payload: { id: number }) => {
  return api.post(`${API_URL}/check/`, payload);
};

const getFaqs = (): Promise<AxiosResponse<AdminFaqListResponse>> => {
  return api.get(`${API_URL}`);
};

const createFaq = (payload: CreateEditFaqRequest) => {
  return api.post(`${API_URL}/`, payload);
};

const editFaq = (faqId: string, payload: CreateEditFaqRequest) => {
  return api.patch(`${API_URL}/${faqId}/`, payload);
};

const getFaqById = (faqId: string): Promise<AxiosResponse<AdminFaqResponse>> => {
  return api.get(`${API_URL}/${faqId}/`);
};

export { deleteFaq, editFaqVisible, getFaqs, createFaq, editFaq, getFaqById };
