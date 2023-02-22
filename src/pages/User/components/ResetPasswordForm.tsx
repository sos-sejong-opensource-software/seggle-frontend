import { Label, Input, Button, ErrorMessage } from '@/components';
import { PAGE } from '@/constants';

import { INPUT, RESETPASSWORD_ERROR } from '../constants';
import { useResetPasswordForm } from '../hooks';

type ResetPasswordFormProps = {
  inputList: ReturnType<typeof useResetPasswordForm>;
  onSubmit: (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => void;
};

export function ResetPasswordForm({ inputList, onSubmit }: ResetPasswordFormProps) {
  const isFormValid = Object.values(inputList).every(({ value, error }) => value && !error);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      {Object.entries(inputList).map(([key, { type, value, error, handleInputChange }]) => (
        <>
          <Label htmlFor={key}>{INPUT[key.toUpperCase()]}</Label>
          <Input
            type={type}
            id={key === 'NEWPASSWORDCHECK' ? 'PASSWORDCHECK' : 'PASSWORD'}
            value={value}
            onChange={(e) => {
              handleInputChange(e, inputList.newPassword.value);
            }}
          />
          {error && <ErrorMessage>{RESETPASSWORD_ERROR[key.toUpperCase()]}</ErrorMessage>}
        </>
      ))}
      <Button disabled={!isFormValid}>{PAGE['RESET_PASSWORD']}</Button>
    </form>
  );
}
