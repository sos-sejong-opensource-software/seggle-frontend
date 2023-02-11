import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getAnnouncementById } from '../../api';

export const useAdminAnnouncementQuery = (
  announcementId: string,
  options?: UseQueryOptions<
    AdminAnnouncementResponse,
    AxiosError,
    AdminAnnouncementResponse,
    [string, string]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_ANNOUNCEMENT, announcementId],
    async ({ queryKey: [, announcementId] }) => {
      const { data } = await getAnnouncementById(announcementId);
      return data;
    },
    {
      ...options,
    }
  );
};
