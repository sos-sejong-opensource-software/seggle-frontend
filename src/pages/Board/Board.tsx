import { useState } from 'react';

import { Heading, Table } from '@/components';

import { useProposal } from './hooks'

export function Board() {

  const ProposalTableData = useProposal() ;
  //console.log(ProposalTableData.);\
  ProposalTableData?.forEach((element)=>{
    console.log(element);
  })
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = 20;
  
  const data = {
        "count": 3,
        "next": null,
        "previous": null,
        "results": [
            {
                "id": 6,
                "title": "112323",
                "created_user": "seggle",
                "created_time": "2023-01-27T20:33:05.578832"
            },
            {
                "id": 5,
                "title": "112323",
                "created_user": "seggle",
                "created_time": "2023-01-27T20:31:28.631619"
            },
            {
                "id": 4,
                "title": "qwer",
                "created_user": "seggle",
                "created_time": "2023-01-27T14:56:03.176323"
            }
        ]
    }
  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '제목', accessor: 'title' },
    { Header: '작성자', accessor: 'created_user' },
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
      <Heading>건의게시판</Heading>
      <Table column={column} data={ProposalTableData} onRowClick={handleRowClick} />
    </>
  );
}
//<h1 className="text-3xl text-blue-400 px-3 py-3">Table</h1>
//<Table column={column} data={data} onRowClick={handleRowClick} />
