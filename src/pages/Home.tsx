import { useState } from 'react';

import { Button, Input, Label } from '@/components';
import Form from '@/components/Form';
import { Modal } from '@/components';
import { Table } from '@/components';
import Pagination from '@/components/Pagination';

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 20;
  const data = [
    {
      id: 2,
      email: 'example@email.com',
      username: 'seggle2',
      name: 'seggle2',
      privilege: 0,
      date_joined: '2022-01-30T22:24:29.473499+09:00',
      is_active: true,
    },
    {
      id: 3,
      email: 'example@email.com',
      username: 'seggle',
      name: 'seggle',
      privilege: 0,
      date_joined: '2022-01-30T22:24:29.473499+09:00',
      is_active: true,
    },
  ];
  const column = [
    { Header: '#', accessor: 'id' },
    { Header: 'ID', accessor: 'name' },
    { Header: '이메일', accessor: 'email' },
    { Header: '이름', accessor: 'username' },
  ];

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number | string
  ) => {
    console.log(id);
  };

  return (
    <>
      <h1 className="text-3xl text-blue-400 px-3 py-3">Button</h1>
      <Button onClick={() => console.log('Button Clicked')}>저장</Button>

      <h1 className="text-3xl text-blue-400 px-3 py-4">Input</h1>
      <Input placeholder="대회명을 입력해주세요" onChange={() => console.log('Input')} />

      <h1 className="text-3xl text-blue-400 px-3 py-3">Label</h1>
      <Label>이메일</Label>

      <h1 className="text-3xl text-blue-400 px-3 py-3">Form</h1>
      <Form todo="form" setTodo={() => console.log('This is form')}></Form>

      <h1 className="text-3xl text-blue-400 px-3 py-3">Modal</h1>
      <Modal open={false}></Modal>

      <h1 className="text-3xl text-blue-400 px-3 py-3">Table</h1>
      <Table column={column} data={data} onRowClick={handleRowClick} />

      <h1 className="text-3xl text-blue-400 px-3 py-3">Pagination</h1>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        maxLength={7}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
