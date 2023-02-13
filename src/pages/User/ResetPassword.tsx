import { ErrorMessage, Heading } from '@/components';
import { PAGE } from '@/constants';
import { ResetPasswordForm } from './components/ResetPasswordForm';
import { RESETPASSWORD_ERROR } from './constants';
import { useResetPasswordForm } from './hooks';
import { useResetPasswordMutation } from './hooks/query/useResetPasswordMutation';

export default function ResetPassword() {
  const inputList = useResetPasswordForm();
  const { mutate, isError } = useResetPasswordMutation();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const [currentPassword, newPassword, newPasswordCheck] = Object.values(inputList).map(
      ({ value }) => value
    );

    mutate({
      current_password: currentPassword,
      new_password: newPassword,
      new_password2: newPasswordCheck,
    });
  };

  return (
    <div className="container max-w-md mx-auto">
      <Heading className="text-2xl font-bold">{PAGE['RESET_PASSWORD']}</Heading>
      <ResetPasswordForm inputList={inputList} onSubmit={handleFormSubmit} />
      {isError && (
        <ErrorMessage className="mt-4">{RESETPASSWORD_ERROR.RESET_PASSWORD_FAILED}</ErrorMessage>
      )}
    </div>
  );
}
