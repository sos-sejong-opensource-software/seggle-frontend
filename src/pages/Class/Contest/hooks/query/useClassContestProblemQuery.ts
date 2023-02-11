import { UseQueryOptions, QueryKey } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getContestProblemList } from '../../api';

export const useClassContestProblemListQuery = (
  classId: QueryKey,
  contestId: QueryKey,
  options?: UseQueryOptions<
    ContestProblemListResponse,
    AxiosError,
    ContestProblemListResponse,
    QueryKey[]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.CLASS_CONTEST, classId, contestId],
    async ({ queryKey: [, classId, contestId] }) => {
      const { data } = await getContestProblemList(String(classId), String(contestId));
      return data;
    },
    {
      ...options,
    }
  );
};
