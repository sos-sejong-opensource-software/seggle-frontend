import { useParams } from 'react-router-dom';

import { Button, Heading, Switch, Table } from '@/components';

import { useClassContestListQuery, useEditContestVisibleMutation } from './hooks';

export function ClassEditContestList() {
  const { classId } = useParams() as { classId: string };

  const column = [
    { Header: '제목', accessor: 'name' },
    { Header: '공개', accessor: 'visible' },
    { Header: '편집', accessor: 'edit' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const { mutate: editContestVisible } = useEditContestVisibleMutation();

  const handleSwitchButtonClick = (id: number) => {
    editContestVisible({ classId, contestId: String(id) });
  };

  const {
    data: { results },
  } = useClassContestListQuery(classId);
  const data = results.map((contest) => ({
    ...contest,
    visible: (
      <Switch enabled={contest.visible} onClick={() => handleSwitchButtonClick(contest.id)} />
    ),
    edit: <Button>편집</Button>,
    delete: <Button>삭제</Button>,
  }));

  return (
    <>
      <Heading as="h4">과제 및 시험 목록 편집</Heading>
      <Table column={column} data={data} />
    </>
  );
}
