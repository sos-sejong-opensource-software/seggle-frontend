import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';

import { getUser } from '../../api';

export const useUserQuery = (
  options?: UseQueryOptions<AdminUserResponse, AxiosError, AdminUserResponse, string>
) => {
  return useQuery(
    QUERY_KEYS.ADMIN_USER_EDIT,
    async () => {
      /** FIXME: username 수정 필요 */
      const { data } = await getUser('test230119');
      return data;
    },
    {
      ...options,
    }
  );
};
