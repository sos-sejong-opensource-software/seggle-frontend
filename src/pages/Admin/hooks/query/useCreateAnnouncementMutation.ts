import { PATH } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { createAnnouncement } from '../../api';

export const useCreateAnnouncementMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, CreateAnnouncementRequest>
) => {
  const navigate = useNavigate();

  return useMutation((payload) => createAnnouncement(payload), {
    ...options,
    onSuccess: () => {
      alert('생성되었습니다.');
      navigate(`${PATH.ADMIN}/${PATH.ADMIN_ANNOUNCEMENTS}`);
    },
  });
};
