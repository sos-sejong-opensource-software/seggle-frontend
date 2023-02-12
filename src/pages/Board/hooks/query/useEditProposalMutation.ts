import { PATH, QUERY_KEYS } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { editProposal } from '../../api';

type useEditProposalMutationProps = {
  proposalId: string;
  payload: CreateEditProposalRequest;
};

export const useEditProposalMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useEditProposalMutationProps>
) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(({ proposalId, payload }) => editProposal(proposalId, payload), {
    ...options,
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.PROPOSAL_EDIT);
      alert('수정되었습니다.');
      navigate(`${PATH.BOARD_LIST}`);
    },
  });
};
