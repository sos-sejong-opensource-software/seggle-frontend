import { AxiosError } from 'axios';
import { UseQueryOptions } from 'react-query';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getUserCompetitionList } from '../../api';

export const useUserCompetitionListQuery = (
  username: string,
  options?: UseQueryOptions<
    UserCompetitionListResponse,
    AxiosError,
    UserCompetitionListResponse,
    string[]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.USER, username],
    async ({ queryKey: [, username] }) => {
      const { data } = await getUserCompetitionList(username);
      return data;
    },
    {
      ...options,
    }
  );
};
