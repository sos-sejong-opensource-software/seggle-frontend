import { ProblemForm } from './components';
import { useCreateProblemMutation } from './hooks';

export function ProblemCreate() {
  const { mutate } = useCreateProblemMutation();
  return <ProblemForm mutate={mutate} />;
}
