import { ErrorMessage, Heading } from '@/components';
import { PAGE } from '@/constants';
import { FindPasswordForm } from './components/FindPasswordForm';
import { FINDPASSWORD_ERROR } from './constants';
import { useFindPasswordForm } from './hooks';
import { useFindPasswordMutation } from './hooks/query/useFindPasswordMutation';

export default function FindPassword() {
  const inputList = useFindPasswordForm();
  const { mutate, isError } = useFindPasswordMutation();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [email] = Object.values(inputList).map(({ value }) => value);

    mutate({
      email: email,
    });
  };

  return (
    <div className="container max-w-md mx-auto">
      <Heading className="text-2xl font-bold">비밀번호 변경</Heading>
      <FindPasswordForm inputList={inputList} onSubmit={handleFormSubmit} />
      {isError && (
        <ErrorMessage className="mt-4">{FINDPASSWORD_ERROR.FIND_PASSWORD_FAILED}</ErrorMessage>
      )}
    </div>
  );
}
