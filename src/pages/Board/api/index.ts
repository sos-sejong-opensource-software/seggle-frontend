import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/proposals`;

const getProposal = (): Promise<AxiosResponse<ProposalResponse>> => {
  return api.get(`${API_URL}`);
};

const getProposalDetail = ({ proposalId }: ProposalDetailRequest) => {
  return api.get(`${API_URL}/${proposalId}`);
};

const createProposal = (payload: CreateEditProposalRequest) => {
  return api.post(`${API_URL}/`, payload);
};

const editProposal = (proposalId: string, payload: CreateEditProposalRequest) => {
  return api.put(`${API_URL}/${proposalId}/`, payload);
};

const deleteProposal = (proposalId: string): Promise<AxiosResponse<DeleteProposalResponse>> => {
  return api.delete(`${API_URL}/${proposalId}`);
};

export { getProposalDetail, getProposal, createProposal, editProposal, deleteProposal };
