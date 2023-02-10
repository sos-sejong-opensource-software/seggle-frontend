import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { getAnnouncements } from '../../api';

export const useAdminAnnouncementListQuery = (
  keyword: string,
  options?: UseQueryOptions<
    AdminAnnouncementListResponse,
    AxiosError,
    AdminAnnouncementListResponse,
    [string, string]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_ALL_ANNOUNCEMENTS, keyword],
    async ({ queryKey: [, keyword] }) => {
      const { data } = await getAnnouncements(keyword);
      return data;
    },
    {
      ...options,
    }
  );
};
