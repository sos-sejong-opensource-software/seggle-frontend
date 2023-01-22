import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';

import { getFaq } from '../../api';

export const useFaqQuery = (
  options?: UseQueryOptions<FaqResponse, AxiosError, FaqResponse, string>
) => {
  return useQuery(
    QUERY_KEYS.FAQ,
    async () => {
      const { data } = await getFaq();
      return data;
    },
    {
      ...options,
    }
  );
};
