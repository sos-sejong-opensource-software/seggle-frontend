import { AxiosError } from 'axios';
import { UseQueryOptions } from 'react-query';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getContestProblemSubmission } from '../../api';

export const useContestProblemSubmissionQuery = (
  params: ContestProblemRequest,
  options?: UseQueryOptions<
    ContestProblemSubmissionResponse,
    AxiosError,
    ContestProblemSubmissionResponse,
    [string, string, string, string, number]
  >
) => {
  const { classId, contestId, contestProblemId, currentPage } = params;
  return useSuspenseQuery(
    [
      QUERY_KEYS.CLASS_CONTEST_PROBLEM_SUBMISSION,
      classId,
      contestId,
      contestProblemId,
      currentPage,
    ],
    async () => {
      const { data } = await getContestProblemSubmission(params);
      return data;
    },
    {
      ...options,
    }
  );
};
