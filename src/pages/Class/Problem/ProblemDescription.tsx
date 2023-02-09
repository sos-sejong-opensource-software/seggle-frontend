import { useOutletContext } from 'react-router-dom';

export function ProblemDescription() {
  const { description } = useOutletContext<{ description: string }>();
  return <>{description}</>;
}
