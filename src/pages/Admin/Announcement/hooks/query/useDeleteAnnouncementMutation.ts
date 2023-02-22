import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { deleteAnnouncement } from '../../api';

export const useDeleteAnnouncementMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, string>
) => {
  return useMutation((announcementId) => deleteAnnouncement(announcementId), {
    ...options,
    onSuccess: () => {
      alert('삭제되었습니다.');
    },
  });
};
