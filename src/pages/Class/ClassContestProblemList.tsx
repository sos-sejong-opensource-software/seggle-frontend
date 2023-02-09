import { useNavigate, useParams } from 'react-router-dom';

import { Button, Heading, Table } from '@/components';
import { useContestProblemListTable, useClassContestListQuery } from './hooks';

export function ClassContestProblemList() {
  const navigate = useNavigate();
  const { classId, contestId } = useParams() as { classId: string; contestId: string };
  const {
    data: { results },
  } = useClassContestListQuery(classId);
  const title = results.find(({ id }) => id === +contestId)?.name;

  const tableProps = useContestProblemListTable(classId, contestId);

  const handleCreateButtonClick = () => {
    navigate('create');
  };

  return (
    <>
      <header className="flex justify-between items-center">
        <Heading as="h3">{title}</Heading>
        <Button onClick={handleCreateButtonClick}>문제 생성</Button>
      </header>
      <Table {...tableProps} />
    </>
  );
}
