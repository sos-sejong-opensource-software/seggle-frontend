import { ErrorMessage, Heading } from '@/components';
import { PAGE } from '@/constants';

import { useAuthForm, useLogin } from './hooks';
import { AuthForm } from './components';
import { LOGIN_ERROR } from './constants';

const MODE = 'login';

export default function Login() {
  const inputList = useAuthForm(MODE);
  const { mutate, isError } = useLogin();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const [username, password] = Object.values(inputList).map(({ value }) => value);
    mutate({ username, password });
  };

  return (
    <div className="container max-w-md mx-auto">
      <Heading className="text-2xl font-bold">{PAGE['LOGIN']}</Heading>
      <AuthForm mode={MODE} inputList={inputList} onSubmit={handleFormSubmit} />
      {isError && <ErrorMessage className="mt-4">{LOGIN_ERROR.LOGIN_FAILED}</ErrorMessage>}
    </div>
  );
}
