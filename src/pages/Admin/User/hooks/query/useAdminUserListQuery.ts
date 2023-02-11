import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { getUsers } from '../../api';

export const useAdminUserListQuery = (
  keyword: string,
  currentPage: number,
  options?: UseQueryOptions<
    AdminUserListResponse,
    AxiosError,
    AdminUserListResponse,
    [string, string, number]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_ALL_USERS, keyword, currentPage],
    async ({ queryKey: [, keyword, currentPage] }) => {
      const { data } = await getUsers(keyword, currentPage);
      return data;
    },
    {
      ...options,
    }
  );
};
