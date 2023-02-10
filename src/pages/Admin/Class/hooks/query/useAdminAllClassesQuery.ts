import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { getClasses } from '../../api';

export const useAdminAllClassesQuery = (
  keyword: string,
  options?: UseQueryOptions<
    AdminAllClassesResponse,
    AxiosError,
    AdminAllClassesResponse,
    [string, string]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_CLASS_LIST, keyword],
    async ({ queryKey: [, keyword] }) => {
      const { data } = await getClasses(keyword);
      return data;
    },
    {
      ...options,
    }
  );
};
