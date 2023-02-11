import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { getUser } from '../../api';

export const useUserQuery = (
  username: string,
  options?: UseQueryOptions<AdminUserResponse, AxiosError, AdminUserResponse, [string, string]>
) => {
  return useQuery(
    [QUERY_KEYS.ADMIN_USER_EDIT, username],
    async ({ queryKey: [, username] }) => {
      const { data } = await getUser(username);
      return data;
    },
    {
      ...options,
    }
  );
};
