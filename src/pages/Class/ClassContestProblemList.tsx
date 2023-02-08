import { useParams } from 'react-router-dom';

import { Button, Heading, Table } from '@/components';
import { useContestProblemListTable, useClassContestListQuery } from './hooks';

export function ClassContestProblemList() {
  const { classId, contestId } = useParams() as { classId: string; contestId: string };
  const {
    data: { results },
  } = useClassContestListQuery(classId);
  const title = results.find(({ id }) => id === +contestId)?.name;

  const tableProps = useContestProblemListTable(classId, contestId);

  return (
    <>
      <header className="flex justify-between items-center">
        <Heading as="h3">{title}</Heading>
        <Button>문제 생성</Button>
      </header>
      <Table {...tableProps} />
    </>
  );
}
