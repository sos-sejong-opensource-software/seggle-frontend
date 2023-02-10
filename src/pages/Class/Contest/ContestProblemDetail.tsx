import { useParams } from 'react-router-dom';

import { SUB_PATH } from '@/constants';

import { Problem } from '../Problem/components';
import { useContestProblemQuery } from './hooks';

export function ContestProblemDetail() {
  const { classId, contestId, contestProblemId } = useParams() as {
    classId: string;
    contestId: string;
    contestProblemId: string;
  };

  const { data } = useContestProblemQuery({ classId, contestId, contestProblemId });

  const menuList = [
    { name: '문제 설명', to: SUB_PATH.DESCRIPTION },
    { name: '데이터', to: SUB_PATH.DATA },
    { name: '리더보드', to: SUB_PATH.LEADERBOARD },
    { name: '제출', to: SUB_PATH.SUBMISSON },
  ];

  return <Problem menuList={menuList} data={data} />;
}
