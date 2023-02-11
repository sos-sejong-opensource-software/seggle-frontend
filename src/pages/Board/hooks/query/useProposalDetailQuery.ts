import { AxiosError } from 'axios';
import { UseQueryOptions } from 'react-query';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getProposalDetail } from '../../api';

export const useProposalDetailQuery = (
  params: ProposalDetailRequest,
  options?: UseQueryOptions<ProposalDetailRequest, AxiosError, ProposalDetailRequest, string[]>
) => {
  const { proposalId } = params;
  return useSuspenseQuery(
    [QUERY_KEYS.BOARD_DETAIL, proposalId],
    async () => {
      const { data } = await getProposalDetail(params);
      return data;
    },
    {
      ...options,
    }
  );
};
