import { PATH } from '@/constants';
import { useNavigate, useParams } from 'react-router-dom';

import { Article } from '../../components/Article';
import { Button } from '@/components';
import { useProposalDetailQuery, useDeleteProposalMutation } from './hooks/query';

export function BoardDetail() {
  const navigate = useNavigate();
  const { mutate: deleteProposal } = useDeleteProposalMutation();

  const proposalId = String(useParams().id);
  const { data } = useProposalDetailQuery(proposalId);

  const goBoardList = () => {
    history.back();
  };

  const handleDeleteButtonClick = ({ e }: { e: React.MouseEvent<HTMLElement> }) => {
    e.stopPropagation();
    const isConfirmed = confirm(`건의사항을 삭제하시겠습니까?`);
    if (isConfirmed) {
      deleteProposal(proposalId);
      goBoardList();
    }
  };

  return (
    <>
      <Button onClick={goBoardList}>목록</Button>
      <Article detail={data}></Article>
      <Button
        onClick={() => {
          navigate(`${PATH.BOARD_LIST}/edit/${proposalId}`);
        }}
      >
        편집
      </Button>
      <Button onClick={(e) => handleDeleteButtonClick({ e })}>삭제</Button>
    </>
  );
}
