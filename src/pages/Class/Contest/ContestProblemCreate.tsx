import { useParams } from 'react-router-dom';
import { ProblemForm } from '@/pages/Class/components';
import { useCreateContestProblemMutation } from './hooks';

export function ContestProblemCreate() {
  const { classId, contestId } = useParams() as { classId: string; contestId: string };
  const { mutate } = useCreateContestProblemMutation(classId, contestId);
  return <ProblemForm mutate={mutate} />;
}
