import { ErrorMessage, Heading } from '@/components';
import { PAGE } from '@/constants';
import { ResignForm } from './components/ResignForm';
import { RESIGN_ERROR } from './constants';
import { useResignForm } from './hooks';
import { useResignMutation } from './hooks/query/useResignMutation';

export default function Resign() {
  const inputList = useResignForm();
  const { mutate, isError } = useResignMutation();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [currentPassword] = Object.values(inputList).map(({ value }) => value);

    mutate({
      current_password: currentPassword,
    });
  };

  return (
    <div className="container max-w-md mx-auto">
      <Heading className="text-2xl font-bold">{PAGE['RESIGN']}</Heading>
      <ResignForm inputList={inputList} onSubmit={handleFormSubmit} />
      {isError && <ErrorMessage className="mt-4">{RESIGN_ERROR.RESIGN_FAILED}</ErrorMessage>}
    </div>
  );
}
