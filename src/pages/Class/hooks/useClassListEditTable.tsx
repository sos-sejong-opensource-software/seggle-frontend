import { useState } from 'react';

import { Button, Input } from '@/components';

import { useClassListQuery, useDeleteClassMutation } from './query';

const mockData = [
  {
    id: 1,
    name: '기계학습',
    year: 2021,
    semester: 1,
    privilege: 1,
    is_show: true,
  },
];

export const useClassListEditTable = () => {
  const column = [
    { Header: '공개', accessor: 'visible' },
    { Header: '연도', accessor: 'year' },
    { Header: '학기', accessor: 'semester' },
    { Header: '제목', accessor: 'name' },
    { Header: '편집', accessor: 'edit' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [editingClassId, setEditingClassId] = useState('');

  const { mutate: deleteClass } = useDeleteClassMutation();

  const handleEditButtonClick = (id: number) => {
    setEditingClassId(`${id}`);
    setShowModal(true);
  };

  const handleDeleteButtonClick = ({ name, id }: { name: string; id: number }) => {
    const isConfirmed = confirm(`${name}을 삭제하시겠습니까?`);
    if (isConfirmed) deleteClass(`${id}`);
  };

  const { data: classList } = useClassListQuery();
  /** FIXME: mockData → classList로 변경 */
  const data = mockData
    .sort(({ year: prev }, { year: next }) => next - prev)
    .map((_class) => {
      const { id, name, is_show } = _class;
      return {
        ..._class,
        visible: <Input type="checkbox" defaultChecked={is_show} className="inline-block" />,
        edit: <Button onClick={() => handleEditButtonClick(id)}>편집</Button>,
        delete: <Button onClick={() => handleDeleteButtonClick({ id, name })}>삭제</Button>,
      };
    });

  return {
    column,
    data,
    modalProps: { classId: editingClassId, showModal, setShowModal },
  };
};
