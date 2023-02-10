import { ProblemForm } from '@/pages/Class/components';
import { useCreateContestProblemMutation } from './hooks';

export function ContestProblemCreate() {
  const { mutate } = useCreateContestProblemMutation();
  return <ProblemForm mutate={mutate} />;
}
