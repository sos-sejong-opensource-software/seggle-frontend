import { AxiosError } from 'axios';
import { UseQueryOptions } from 'react-query';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getProblemById } from '../../api';

export const useProblemQuery = (
  problemId: string,
  options?: UseQueryOptions<Problem, AxiosError, Problem, string[]>
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.PROBLEM_DETAIL, problemId],
    async () => {
      const { data } = await getProblemById(problemId);
      return data;
    },
    {
      ...options,
    }
  );
};
