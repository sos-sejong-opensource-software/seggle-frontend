import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getProposal } from '../../api';

export const useProposalQuery = (
  currentPage: number,
  options?: UseQueryOptions<ProposalResponse, AxiosError, ProposalResponse, [string, number]>
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.PROPOSAL, currentPage],
    async ({ queryKey: [, currentPage] }) => {
      const { data } = await getProposal(currentPage);
      return data;
    },
    {
      ...options,
    }
  );
};
