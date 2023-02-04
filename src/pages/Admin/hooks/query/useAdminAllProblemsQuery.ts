import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getProblems } from '../../api';

export const useAdminAllProblemsQuery = (
  options?: UseQueryOptions<AdminAllProblemsResponse, AxiosError, AdminAllProblemsResponse, string>
) => {
  return useSuspenseQuery(
    QUERY_KEYS.ADMIN_ALL_PROBLEMS,
    async () => {
      const { data } = await getProblems();
      return data;
    },
    {
      ...options,
    }
  );
};
