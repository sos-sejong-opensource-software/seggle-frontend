import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getAllProblemList } from '../../api';

export const useAllProblemListQuery = (
  { keyword, currentPage }: { keyword: string; currentPage: number },
  options?: UseQueryOptions<
    ProblemListResponse,
    AxiosError,
    ProblemListResponse,
    [string, string, number]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.CLASS_PROBLEM, keyword, currentPage],
    async ({ queryKey: [, keyword, currentPage] }) => {
      const { data } = await getAllProblemList({ keyword, currentPage });
      return data;
    },
    {
      ...options,
    }
  );
};
