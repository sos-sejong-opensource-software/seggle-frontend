import { useOutletContext } from 'react-router-dom';

export function ProblemData() {
  const { data_description: dataDescription } = useOutletContext<{ data_description: string }>();
  return <>{dataDescription}</>;
}
