import { PATH } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { createProposal } from '../../api';

export const useCreateProposalMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, CreateEditProposalRequest>
) => {
  const navigate = useNavigate();

  return useMutation((payload) => createProposal(payload), {
    ...options,
    onSuccess: () => {
      alert('생성되었습니다.');
      navigate(`${PATH.BOARD}`);
    },
  });
};
