import { ErrorMessage, Heading } from '@/components';
import { PAGE } from '@/constants';

import { useInput, useLogin } from './hooks';
import { AuthForm } from './components';
import { LOGIN_ERROR } from './constants';

export default function Login() {
  const username = useInput();
  const password = useInput();
  const { mutate, isError } = useLogin();

  const inputList = [
    {
      id: 'username',
      label: '아이디',
      valid() {
        return this?.value?.length >= 5;
      },
      ...username,
    },
    {
      id: 'password',
      label: '비밀번호',
      valid() {
        return this.value.length >= 8;
      },
      ...password,
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ username: username.value, password: password.value });
  };

  return (
    <div className="container max-w-md mx-auto">
      <Heading className="text-2xl font-bold">{PAGE['LOGIN']}</Heading>
      <AuthForm mode="login" inputList={inputList} onSubmit={handleFormSubmit} />
      {isError && <ErrorMessage className="mt-4">{LOGIN_ERROR.LOGIN_FAILED}</ErrorMessage>}
    </div>
  );
}
