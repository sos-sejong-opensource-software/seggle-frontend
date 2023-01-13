import { Label, Input, Button, ErrorMessage } from '@/components';
import { PAGE } from '@/constants';

import { LOGIN_ERROR, REGISTER_ERROR, INPUT } from '../constants';
import { useAuthForm } from '../hooks';

type AuthFormProps = {
  mode: 'login' | 'register';
  inputList: ReturnType<typeof useAuthForm>;
  onSubmit: (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => void;
};

export function AuthForm({ mode, inputList, onSubmit }: AuthFormProps) {
  const ERROR_MESSAGE = mode === 'login' ? LOGIN_ERROR : REGISTER_ERROR;

  const isFormValid = Object.values(inputList).every(({ value, error }) => value && !error);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      {Object.entries(inputList).map(([key, { type, value, error, handleInputChange }]) => (
        <>
          <Label htmlFor={key}>{INPUT[key.toUpperCase()]}</Label>
          <Input
            type={type}
            id={key}
            value={value}
            onChange={(e) => {
              handleInputChange(e, inputList.password.value);
            }}
          />
          {error && <ErrorMessage>{ERROR_MESSAGE[key.toUpperCase()]}</ErrorMessage>}
        </>
      ))}
      <Button disabled={!isFormValid}>{PAGE[mode.toUpperCase()]}</Button>
    </form>
  );
}
