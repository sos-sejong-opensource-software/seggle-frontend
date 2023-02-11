import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { getProblems } from '../../api';

export const useAdminProblemListQuery = (
  keyword: string,
  options?: UseQueryOptions<
    AdminProblemListResponse,
    AxiosError,
    AdminProblemListResponse,
    [string, string]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_PROBLEM_LIST, keyword],
    async ({ queryKey: [, keyword] }) => {
      const { data } = await getProblems(keyword);
      return data;
    },
    {
      ...options,
    }
  );
};
