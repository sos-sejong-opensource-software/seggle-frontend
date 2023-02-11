import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { createClassStudentList } from '../../api';

type useCreateStudentListProps = { classId: string; payload: ClassStudentRequest };

export const useCreateStudentListMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useCreateStudentListProps>
) => {
  return useMutation(({ classId, payload }) => createClassStudentList({ classId, payload }), {
    ...options,
  });
};
