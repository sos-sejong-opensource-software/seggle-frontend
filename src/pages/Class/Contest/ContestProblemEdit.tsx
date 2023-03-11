import { useParams } from 'react-router-dom';

import { ProblemForm } from '@/pages/Class/components';

import { useEditContestProblemMutation, useContestProblemQuery } from './hooks';

export function ContestProblemEdit() {
  const { classId, contestId, contestProblemId } = useParams() as {
    classId: string;
    contestId: string;
    contestProblemId: string;
  };

  const { data } = useContestProblemQuery({ classId, contestId, contestProblemId });
  const { mutate } = useEditContestProblemMutation(classId, contestId, contestProblemId);

  return <ProblemForm data={{ ...data, data: new Blob(), solution: new Blob() }} mutate={mutate} />;
}
