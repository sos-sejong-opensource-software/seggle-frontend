import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/proposals`;

const getProposal = (): Promise<AxiosResponse<ProposalResponse>> => {
  return api.get(`${API_URL}`);
};

const getProposalDetail = (proposalId: string) => {
  return api.get(`${API_URL}/${proposalId}`);
};

const createProposal = (payload: CreateEditProposalRequest) => {
  return api.post(`${API_URL}/`, payload);
};

const editProposal = (proposalId: string, payload: FormData) => {
  return api.put(`${API_URL}/${proposalId}/`, payload);
};

const deleteProposal = (proposalId: string) => {
  return api.delete(`${API_URL}/${proposalId}`);
};

export { getProposalDetail, getProposal, createProposal, editProposal, deleteProposal };