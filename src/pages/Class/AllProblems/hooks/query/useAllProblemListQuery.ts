import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getAllProblemList } from '../../api';

export const useAllProblemListQuery = (
  { keyword }: { keyword: string },
  options?: UseQueryOptions<ProblemListResponse, AxiosError, ProblemListResponse, [string, string]>
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.CLASS_PROBLEM, keyword],
    async ({ queryKey: [, keyword] }) => {
      const { data } = await getAllProblemList({ keyword });
      return data;
    },
    {
      ...options,
    }
  );
};
