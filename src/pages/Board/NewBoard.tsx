import { Heading } from '@/components';
import { ProposalCreateEditForm } from './components/ProposalCreateEditForm';
import { useCreateProposalMutation } from './hooks/query';

export function NewBoard() {
  const { mutate: createProposal } = useCreateProposalMutation();

  const onProposalMutate = (data: CreateEditProposalRequest) => {
    createProposal(data);
  };

  return (
    <div className="container">
      <Heading as="h3" className="pageTitle">
        글 생성
      </Heading>
      <ProposalCreateEditForm onProposalMutate={onProposalMutate} />
    </div>
  );
}
