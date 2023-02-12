import { useParams } from 'react-router-dom';

import { Article } from '../../components/Article';
import { Button } from '@/components';
import { useProposalDetailQuery } from './hooks/query/useProposalDetailQuery';

export function BoardDetail() {
  const proposalId = useParams().id;
  const { data } = useProposalDetailQuery(String(proposalId));

  const goBoardList = () => {
    history.back();
  };

  return (
    <>
      <Button onClick={goBoardList}>목록</Button>
      <Article detail={data}></Article>
      <Button>수정</Button>
      <Button>삭제</Button>
    </>
  );
}
