import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getClassList } from '../../api';

export const useClassListQuery = (
  options?: UseQueryOptions<ClassListResponse, AxiosError, ClassListResponse, string>
) => {
  return useSuspenseQuery(
    QUERY_KEYS.FAQ,
    async () => {
      const { data } = await getClassList();
      return data;
    },
    {
      ...options,
    }
  );
};
