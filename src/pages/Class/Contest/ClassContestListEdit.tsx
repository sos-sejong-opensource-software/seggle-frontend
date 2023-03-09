import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Heading, Switch, Table } from '@/components';

import {
  useClassContestListQuery,
  useDeleteContestMutation,
  useEditContestVisibleMutation,
} from './hooks';

import { ContestEditModal } from './components';

export function ClassContestListEdit() {
  const { classId } = useParams() as { classId: string };

  const [showModal, setShowModal] = useState(false);
  const [editingContestId, setEditingContestId] = useState('');

  const column = [
    { Header: '제목', accessor: 'name' },
    { Header: '공개', accessor: 'visible' },
    { Header: '편집', accessor: 'edit' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const { mutate: editContestVisible } = useEditContestVisibleMutation();
  const handleSwitchButtonClick = (id: number) => {
    editContestVisible({ classId, contestId: `${id}` });
  };

  const { mutate: deleteContest } = useDeleteContestMutation();
  const handleDeleteButtonClick = (id: number, name: string) => {
    const isConfirmed = confirm(`${name}을 삭제하시겠습니까?`);
    if (isConfirmed) deleteContest({ classId, contestId: `${id}` });
  };

  const handleEditButtonClick = (id: number) => {
    setEditingContestId(`${id}`);
    setShowModal(true);
  };

  const {
    data: { results },
  } = useClassContestListQuery(classId);
  const data = results.map((contest) => {
    const { id, name, visible } = contest;
    return {
      ...contest,
      visible: (
        <Switch
          key={`${id}_visible_${String(visible)}`}
          enabled={visible}
          onClick={() => handleSwitchButtonClick(id)}
        />
      ),
      edit: <Button onClick={() => handleEditButtonClick(id)}>편집</Button>,
      delete: <Button onClick={() => handleDeleteButtonClick(id, name)}>삭제</Button>,
    };
  });

  const modalData = results.find(({ id }) => editingContestId === `${id}`);

  return (
    <>
      <Heading as="h4">과제 및 시험 목록 편집</Heading>
      <Table column={column} data={data} />
      <ContestEditModal
        contestId={editingContestId}
        data={modalData}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}
