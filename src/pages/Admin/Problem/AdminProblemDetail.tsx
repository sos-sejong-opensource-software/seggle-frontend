import { useParams } from 'react-router-dom';

import { SUB_PATH } from '@/constants';
import { Problem } from '@/pages/Class/components';
import { useProblemQuery } from './hooks/query';

export function AdminProblemDetail() {
  const { problemId } = useParams() as { problemId: string };

  const { data } = useProblemQuery(problemId);

  const menuList = [
    { name: '문제 설명', to: SUB_PATH.DESCRIPTION },
    { name: '데이터', to: SUB_PATH.DATA },
  ];

  return <Problem menuList={menuList} data={data} />;
}
