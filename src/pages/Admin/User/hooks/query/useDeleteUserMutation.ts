import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { deleteUser } from '../../api';

export const useDeleteUserMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, string>
) => {
  return useMutation((username) => deleteUser(username), {
    ...options,
    onSuccess: () => {
      alert('삭제되었습니다.');
    },
  });
};
