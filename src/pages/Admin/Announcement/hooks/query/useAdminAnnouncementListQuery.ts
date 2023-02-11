import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { getAnnouncements } from '../../api';

export const useAdminAnnouncementListQuery = (
  keyword: string,
  currentPage: number,
  options?: UseQueryOptions<
    AdminAnnouncementListResponse,
    AxiosError,
    AdminAnnouncementListResponse,
    [string, string, number]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_ANNOUNCEMENT_LIST, keyword, currentPage],
    async ({ queryKey: [, keyword, currentPage] }) => {
      const { data } = await getAnnouncements(keyword, currentPage);
      return data;
    },
    {
      ...options,
    }
  );
};
