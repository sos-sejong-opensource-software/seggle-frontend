import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getUsers } from '../../api';

export const useAdminUserListQuery = (
  keyword: string,
  options?: UseQueryOptions<
    AdminUserListResponse,
    AxiosError,
    AdminUserListResponse,
    [string, string]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_ALL_USERS, keyword],
    async ({ queryKey: [, keyword] }) => {
      const { data } = await getUsers(keyword);
      return data;
    },
    {
      ...options,
    }
  );
};
