import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button, Heading, Table } from '@/components';

import { useProposal } from './hooks';
import Pagination from '@/components/Pagination';

export function Board() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, page } = useProposal(currentPage);

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '제목', accessor: 'title' },
    { Header: '작성자', accessor: 'created_user' },
    { Header: '작성일', accessor: 'created_time' },
  ];

  const movePage = useNavigate();

  function goCreateProposal() {
    movePage(`/board/create`);
  }
  function goBoardDetail(id: number | string) {
    movePage(`/board/${id}`);
  }

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number | string
  ) => {
    goBoardDetail(id);
  };

  return (
    <>
      <Heading>건의게시판</Heading>
      <Button onClick={goCreateProposal}>글쓰기</Button>
      <Table column={column} data={data} onRowClick={handleRowClick} />
      <Pagination setCurrentPage={setCurrentPage} {...page} />
    </>
  );
}
//<h1 className="text-3xl text-blue-400 px-3 py-3">Table</h1>
//<Table column={column} data={data} onRowClick={handleRowClick} />
