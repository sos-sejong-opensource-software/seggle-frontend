import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Heading, Table, Button } from '@/components';
import Pagination from '@/components/Pagination';
import { formatTime } from '@/utils/time';
import { useUsername } from '@/hooks/useUsername';

import { useContestProblemSubmissionQuery } from '../hooks';

type FileSubmissionFormProps<T extends React.ElementType> = Component<T>;

export function LeaderboardSubmissionForm({ ...props }: FileSubmissionFormProps<'form'>) {
  const { classId, contestId, contestProblemId } = useParams() as {
    classId: string;
    contestId: string;
    contestProblemId: string;
  };
  const [currentPage, setCurrentPage] = useState(1);

  const column = [
    { Header: 'check', accessor: 'check' },
    { Header: 'csv 파일', accessor: 'csvFile' },
    { Header: 'ipynb 파일', accessor: 'ipynbFile' },
    { Header: '점수', accessor: 'score' },
    { Header: 'status', accessor: 'status' },
    { Header: '제출 날짜', accessor: 'submissionDate' },
  ];

  const { username } = useUsername();
  const {
    data: { results, current_page, last_page },
  } = useContestProblemSubmissionQuery({
    classId,
    contestId,
    contestProblemId,
    currentPage,
    username: username ?? '',
  });

  const data = results
    .sort(({ score: prev }, { score: next }) => next - prev)
    .sort(({ created_time: prev }, { created_time: next }) => +new Date(prev) - +new Date(next))
    .map((submission) => ({
      ...submission,
      check: <input type="checkbox" id={String(submission.id)} />,
      submissionDate: formatTime(submission.created_time),
    }));

  return (
    <form className="flex flex-col gap-2 mb-10" {...props}>
      <Heading as="h4">제출 내역</Heading>
      <p>선택한 제출 내역이 리더보드에 표시됩니다.</p>
      <Table column={column} data={data} />
      <Pagination setCurrentPage={setCurrentPage} currentPage={current_page} lastPage={last_page} />
      <Button>제출</Button>
    </form>
  );
}
