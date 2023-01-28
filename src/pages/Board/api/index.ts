import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL='/proposals'

const getProposal = (): Promise<AxiosResponse<ProposalResponse>> => {
  return api.get(`${API_URL}`);
};

export { getProposal };