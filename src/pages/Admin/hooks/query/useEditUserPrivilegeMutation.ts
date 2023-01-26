import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { editUserPrivilege } from '../../api';

export const useEditUserPrivilegeMutation = (
  options?: UseMutationOptions<AxiosResponse<AdminUserResponse>, AxiosError, EditUserRequest>
) => {
  return useMutation(({ username, privilege }) => editUserPrivilege({ username, privilege }), {
    ...options,
  });
};
