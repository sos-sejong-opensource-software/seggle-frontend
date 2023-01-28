import { useState } from 'react';

import { Heading, Table } from '@/components';

import { useAnnouncement } from './hooks'

export function Announcement() {

  const announcementTableData = useAnnouncement();
  console.log(announcementTableData);
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 20;
  
  const data = {
    "count": 2,
    "next": null,
    "previous": null,
    "results": [
        {
            "id" : 1,
						"title" : "세글 이용 공지",
						"created_time" : "2013-01-29T12:34:56.000000Z",
						"last_modified": "2013-01-29T12:34:56.000000Z",
						"important" : true,
						"visible": true
        },
        {
            "id" : 2,
						"title" : "세글 이용 공지2",
						"created_time" : "2013-01-29T12:34:56.000000Z",
						"last_modified": "2013-01-29T12:34:56.000000Z",
						"important" : true,
						"visible": true
        },
        ]
    }

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '제목', accessor: 'title' },
    { Header: '작성일', accessor: 'created_time' },
  ];

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number | string
  ) => {
    console.log(id);
  };

  return (
    <>
      <Heading>공지사항</Heading>
      <Table column={column} data={data.results} onRowClick={handleRowClick} />
    </>
  );
}
//<h1 className="text-3xl text-blue-400 px-3 py-3">Table</h1>
//<Table column={column} data={data} onRowClick={handleRowClick} />
