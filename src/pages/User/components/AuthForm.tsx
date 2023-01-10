import { Label, Input, Button, ErrorMessage } from '@/components';
import { PAGE } from '@/constants';

import { LOGIN_ERROR, REGISTER_ERROR } from '../constants';
import { useInput } from '../hooks';

type AuthFormProps = {
  mode: 'login' | 'register';
  inputList: (ReturnType<typeof useInput> & { id: string; label: string; valid(): boolean })[];
  onSubmit: (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => Promise<void>;
};

export function AuthForm({ mode, inputList, onSubmit }: AuthFormProps) {
  const ERROR_MESSAGE = mode === 'login' ? LOGIN_ERROR : REGISTER_ERROR;

  const isFormValid = inputList.every((input) => input.valid());

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      {inputList.map(({ id, label, value, setValue, error, setError, valid }, index) => (
        <>
          <Label htmlFor={id}>{label}</Label>
          <Input
            type={id.includes('password') ? 'password' : undefined}
            id={id}
            value={value}
            onChange={({ target: { value } }) => {
              setValue(value);
              setError(!valid.call(inputList[index]));
            }}
          />
          {error && <ErrorMessage>{ERROR_MESSAGE[id.toUpperCase()]}</ErrorMessage>}
        </>
      ))}
      <Button disabled={!isFormValid}>{PAGE[mode.toUpperCase()]}</Button>
    </form>
  );
}
