import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { editContest } from '../../api';

type useEditContestProps = { classId: string; contestId: string; payload: ContestRequest };

export const useEditContestMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useEditContestProps>
) => {
  return useMutation(
    ({ classId, contestId, payload }) => editContest({ classId, contestId, payload }),
    {
      ...options,
      onSuccess: () => {
        alert('편집 완료');
      },
    }
  );
};
