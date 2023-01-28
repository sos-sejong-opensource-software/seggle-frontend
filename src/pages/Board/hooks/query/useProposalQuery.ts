import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';

import { getProposal } from '../../api';

export const useProposalQuery = (
  options?: UseQueryOptions<ProposalResponse, AxiosError, ProposalResponse, string>
) => {
  return useQuery(
    QUERY_KEYS.PROPOSAL,
    async () => {
      const { data } = await getProposal();
      return data;
    },
    {
      ...options,
    }
  );
};
