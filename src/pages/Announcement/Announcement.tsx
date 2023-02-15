import { Heading, Table } from '@/components';
import Pagination from '@/components/Pagination';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAnnouncement } from './hooks';

export function Announcement() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, page } = useAnnouncement(currentPage);

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '제목', accessor: 'title' },
    { Header: '작성자', accessor: 'created_user' },
    { Header: '작성일', accessor: 'created_time' },
  ];

  const movePage = useNavigate();

  function goAnnouncementDetail(id: number | string) {
    movePage(`/announcement/${id}`);
  }

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number | string
  ) => {
    goAnnouncementDetail(id);
  };

  return (
    <>
      <Heading>공지사항</Heading>
      <Table column={column} data={data} onRowClick={handleRowClick} />
      <Pagination setCurrentPage={setCurrentPage} {...page} />
    </>
  );
}
