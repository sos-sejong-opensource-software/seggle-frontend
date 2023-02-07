import { useState } from 'react';

import { Button, Heading, LinkButton, Table } from '@/components';
import { PATH, PAGE } from '@/constants';

import { useClassListTable } from './hooks';
import { ClassFormModal } from './components';

export function ClassList() {
  const [showModal, setShowModal] = useState(false);
  const { column, data, handleRowClick } = useClassListTable();

  return (
    <>
      <header className="flex items-center">
        <Heading>{PAGE.CLASS_LIST}</Heading>
        <LinkButton to={PATH.CLASS_LIST_EDIT}>편집</LinkButton>
        <Button onClick={() => setShowModal(true)}>수업 생성</Button>
      </header>
      <Table column={column} data={data} onRowClick={handleRowClick} />
      {showModal && <ClassFormModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
}
