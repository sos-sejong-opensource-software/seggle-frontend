import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getProblemList } from '../../api';

export const useProblemListQuery = (
  { keyword }: { keyword: string },
  options?: UseQueryOptions<ProblemListResponse, AxiosError, ProblemListResponse, [string, string]>
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.CLASS_PROBLEM, keyword],
    async ({ queryKey: [, keyword] }) => {
      const { data } = await getProblemList({ keyword });
      return data;
    },
    {
      ...options,
    }
  );
};
