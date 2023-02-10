import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { Button, Heading, Table } from '@/components';

import { useContestProblemListTable, useClassContestListQuery } from './hooks';
import { ContestProblemCreateModal } from './components';

export function ClassContestProblemList() {
  const [showModal, setShowModal] = useState(false);
  const { classId, contestId } = useParams() as { classId: string; contestId: string };
  const {
    data: { results },
  } = useClassContestListQuery(classId);
  const title = results.find(({ id }) => id === +contestId)?.name;

  const tableProps = useContestProblemListTable(classId, contestId);

  const handleCreateButtonClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <header className="flex justify-between items-center">
        <Heading as="h3">{title}</Heading>
        <Button onClick={handleCreateButtonClick}>문제 생성</Button>
      </header>
      <Table {...tableProps} />
      <ContestProblemCreateModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
