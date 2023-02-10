import { AxiosError } from 'axios';
import { UseQueryOptions } from 'react-query';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getContestProblem } from '../../api';

export const useContestProblemQuery = (
  params: ContestProblemRequest,
  options?: UseQueryOptions<Problem, AxiosError, Problem, string[]>
) => {
  const { classId, contestId, contestProblemId } = params;
  return useSuspenseQuery(
    [QUERY_KEYS.CLASS_CONTEST_PROBLEM, classId, contestId, contestProblemId],
    async () => {
      const { data } = await getContestProblem(params);
      return data;
    },
    {
      ...options,
    }
  );
};
