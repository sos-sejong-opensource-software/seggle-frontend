import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { getProblems } from '../../api';

export const useAdminProblemListQuery = (
  keyword: string,
  currentPage: number,
  options?: UseQueryOptions<
    AdminProblemListResponse,
    AxiosError,
    AdminProblemListResponse,
    [string, string, number]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_PROBLEM_LIST, keyword, currentPage],
    async ({ queryKey: [, keyword, currentPage] }) => {
      const { data } = await getProblems(keyword, currentPage);
      return data;
    },
    {
      ...options,
    }
  );
};
