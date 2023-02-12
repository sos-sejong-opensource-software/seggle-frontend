import { PATH } from '@/constants';

import { useMutation, UseMutationOptions } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { AxiosError, AxiosResponse } from 'axios';

import { editProposal } from '../../api';

export const useEditProposalMutation = (
  proposalId: string,
  options?: UseMutationOptions<AxiosResponse, AxiosError, FormData>
) => {
  const navigate = useNavigate();
  return useMutation((payload) => editProposal(proposalId, payload), {
    ...options,
    onSuccess: () => {
      alert('수정 완료');
      navigate(`${PATH.BOARD}`);
    },
  });
};
