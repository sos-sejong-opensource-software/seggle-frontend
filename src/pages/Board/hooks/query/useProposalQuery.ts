import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getProposal } from '../../api';

export const useProposalQuery = (
  options?: UseQueryOptions<ProposalResponse, AxiosError, ProposalResponse, string>
) => {
  return useSuspenseQuery(
    QUERY_KEYS.FAQ,
    async () => {
      const { data } = await getProposal();
      return data;
    },
    {
      ...options,
    }
  );
};