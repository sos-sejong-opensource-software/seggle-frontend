import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Table } from '@/components';
import Pagination from '@/components/Pagination';
import { formatTime } from '@/utils/time';

import { useContestProblemSubmissionQuery } from './hooks';

export function ProblemLeaderBoard() {
  const [currentPage, setCurrentPage] = useState(1);
  const { classId, contestId, contestProblemId } = useParams() as {
    classId: string;
    contestId: string;
    contestProblemId: string;
  };
  /** TODO: 파일 다운로드 부분 추가 */
  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '이름', accessor: 'username' },
    { Header: '점수', accessor: 'score' },
    { Header: '제출 날짜', accessor: 'submissionDate' },
  ];

  const {
    data: { results, current_page, last_page },
  } = useContestProblemSubmissionQuery({ classId, contestId, contestProblemId, currentPage });

  const data = results
    .sort(({ score: prev }, { score: next }) => next - prev)
    .sort(({ created_time: prev }, { created_time: next }) => +new Date(prev) - +new Date(next))
    .map((submission) => ({ ...submission, submissionDate: formatTime(submission.created_time) }));

  return (
    <>
      <Table column={column} data={data} />
      <Pagination setCurrentPage={setCurrentPage} currentPage={current_page} lastPage={last_page} />
    </>
  );
}
