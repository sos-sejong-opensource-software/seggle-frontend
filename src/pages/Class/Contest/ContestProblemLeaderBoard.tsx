import { useParams } from 'react-router-dom';

import { Table } from '@/components';
import { formatTime } from '@/utils/time';

import { useContestProblemSubmissionQuery } from './hooks';

export function ProblemLeaderBoard() {
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

  /** FIXME: 새로운 api로 교체해야함 */
  const {
    data: { results },
  } = useContestProblemSubmissionQuery({ classId, contestId, contestProblemId });

  const data = results
    .sort(({ score: prev }, { score: next }) => next - prev)
    .sort(({ created_time: prev }, { created_time: next }) => +new Date(prev) - +new Date(next))
    .map((submission) => ({ ...submission, submissionDate: formatTime(submission.created_time) }));

  return <Table column={column} data={data} />;
}
