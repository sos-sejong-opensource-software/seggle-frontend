import { AxiosError } from 'axios';
import { UseQueryOptions } from 'react-query';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getUser } from '../../api';

export const useUserQuery = (
  username: string,
  options?: UseQueryOptions<UserResponse, AxiosError, UserResponse, string[]>
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.USER, username],
    async ({ queryKey: [, username] }) => {
      const { data } = await getUser(username);
      return data;
    },
    {
      ...options,
      enabled: !!username,
    }
  );
};
