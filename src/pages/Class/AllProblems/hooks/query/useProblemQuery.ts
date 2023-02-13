import { UseQueryOptions, QueryKey } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getProblem } from '../../api';

export const useProblemQuery = (
  problemId: QueryKey,
  options?: UseQueryOptions<Problem, AxiosError, Problem, QueryKey[]>
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.CLASS_PROBLEM, problemId],
    async ({ queryKey: [, problemId] }) => {
      const { data } = await getProblem(String(problemId));
      return data;
    },
    {
      ...options,
    }
  );
};
