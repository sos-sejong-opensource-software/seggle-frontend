import { useParams } from 'react-router-dom';

import { ProblemForm } from '@/pages/Class/components';

import { useEditProblemMutation, useProblemQuery } from './hooks';

export function ProblemEdit() {
  const { problemId } = useParams() as { problemId: string };
  /** FIXME: 파일이 존재하는 쿼리로 변경 + contest problem API 추가 */
  const { data } = useProblemQuery(problemId);
  const { mutate } = useEditProblemMutation(problemId);

  return <ProblemForm data={{ ...data, data: new Blob(), solution: new Blob() }} mutate={mutate} />;
}
