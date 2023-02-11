import { PATH, QUERY_KEYS } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { editAnnouncement } from '../../api';

type useEditAnnouncementMutationProps = {
  announcementId: string;
  payload: CreateEditAnnouncementRequest;
};

export const useEditAnnouncementMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useEditAnnouncementMutationProps>
) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(({ announcementId, payload }) => editAnnouncement(announcementId, payload), {
    ...options,
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.ADMIN_ANNOUNCEMENT);
      alert('수정되었습니다.');
      navigate(`${PATH.ADMIN}/${PATH.ADMIN_ANNOUNCEMENT_LIST}`);
    },
  });
};
