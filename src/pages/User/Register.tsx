import { ErrorMessage, Heading } from '@/components';
import { PAGE } from '@/constants';

import { useAuthForm } from './hooks';
import { AuthForm } from './components';
import { REGISTER_ERROR } from './constants';
import { useRegisterMutation } from './hooks/query';

const MODE = 'register';

export default function Register() {
  const inputList = useAuthForm(MODE);
  const { mutate, isError } = useRegisterMutation();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [name, email, username, password, passwordCheck] = Object.values(inputList).map(
      ({ value }) => value
    );

    mutate({
      name,
      email,
      username,
      password,
      password2: passwordCheck,
    });
  };

  return (
    <div className="container max-w-md mx-auto">
      <Heading className="text-2xl font-bold">{PAGE['REGISTER']}</Heading>
      <AuthForm mode={MODE} inputList={inputList} onSubmit={handleFormSubmit} />
      {isError && <ErrorMessage className="mt-4">{REGISTER_ERROR.REGISTER_FAILED}</ErrorMessage>}
    </div>
  );
}
