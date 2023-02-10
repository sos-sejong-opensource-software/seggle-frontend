import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { deleteContest } from '../../api';

type useDeleteContestVisibleProps = {
  classId: string;
  contestId: string;
};

export const useDeleteContestMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useDeleteContestVisibleProps>
) => {
  return useMutation(({ classId, contestId }) => deleteContest(classId, contestId), {
    ...options,
  });
};
