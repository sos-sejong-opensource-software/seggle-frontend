import { AxiosError } from 'axios';
import { UseQueryOptions } from 'react-query';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getUserContributions } from '../../api';

export const useUserContributionsQuery = (
  username: string,
  options?: UseQueryOptions<
    UserContributionsResponse,
    AxiosError,
    UserContributionsResponse,
    string[]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.USER_CONTRIBUTIONS, username],
    async ({ queryKey: [, username] }) => {
      const { data } = await getUserContributions(username);
      return data;
    },
    {
      ...options,
    }
  );
};
