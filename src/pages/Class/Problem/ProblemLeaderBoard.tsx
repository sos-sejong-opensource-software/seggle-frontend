import { Table } from '@/components';

export function ProblemLeaderBoard() {
  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '이름', accessor: 'name' },
    { Header: '점수', accessor: 'score' },
    { Header: '제출 날짜', accessor: 'time' },
    { Header: '코드(.ipynb)', accessor: 'ipynbFile' },
    { Header: '답안(.csv)', accessor: 'csvFile' },
  ];

  /** FIXME: 수업 상세 정보 */
  const data = [{ id: 1 }];

  return <Table column={column} data={data} />;
}
