import { Heading } from '@/components';
import { useParams } from 'react-router-dom';
import { ProposalCreateEditForm } from './components';
import { useProposalDetailQuery, useEditProposalMutation } from './hooks/query';

export function BoardEdit() {
  const proposalId = String(useParams().id);
  console.log(proposalId);
  const { mutate: editProposal } = useEditProposalMutation();

  const onProposalMutate = (data: CreateEditProposalRequest) => {
    editProposal({ proposalId, payload: data });
  };

  const { data: queryData } = useProposalDetailQuery(proposalId);

  const { title, context, ...res } = queryData;
  const data = {
    title: title,
    context: context,
    ...res,
  };

  return (
    <div className="container">
      <Heading as="h3" className="pageTitle">
        글 수정
      </Heading>
      <ProposalCreateEditForm data={data} onProposalMutate={onProposalMutate} />
    </div>
  );
}
