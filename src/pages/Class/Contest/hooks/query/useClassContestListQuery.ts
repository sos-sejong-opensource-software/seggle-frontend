import { UseQueryOptions, QueryKey } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getContestList } from '../../api';

export const useClassContestListQuery = (
  classId: QueryKey,
  options?: UseQueryOptions<ContestListResponse, AxiosError, ContestListResponse, QueryKey[]>
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.CLASS_CONTEST, classId],
    async ({ queryKey: [, classId] }) => {
      const { data } = await getContestList(String(classId));
      return data;
    },
    {
      ...options,
    }
  );
};
