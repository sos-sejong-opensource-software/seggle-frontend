import { UseQueryOptions, QueryKey } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getProposalDetail } from '../../api';

export const useProposalDetailQuery = (
  proposalId: QueryKey,
  options?: UseQueryOptions<ProposalDetail, AxiosError, ProposalDetail, QueryKey[]>
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.PROPOSAL_DETAIL, proposalId],
    async ({ queryKey: [, proposalId] }) => {
      const { data } = await getProposalDetail(String(proposalId));
      return data;
    },
    {
      ...options,
    }
  );
};
