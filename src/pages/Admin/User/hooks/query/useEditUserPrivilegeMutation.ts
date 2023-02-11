import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { editUserPrivilege } from '../../api';

export const useEditUserPrivilegeMutation = (
  options?: UseMutationOptions<AxiosResponse<AdminUserResponse>, AxiosError, EditUserRequest>
) => {
  const queryClient = useQueryClient();
  return useMutation(({ username, privilege }) => editUserPrivilege({ username, privilege }), {
    ...options,
    onSuccess: async () => {
      alert('수정되었습니다.');
      await queryClient.invalidateQueries(QUERY_KEYS.ADMIN_USER_EDIT);
    },
  });
};
