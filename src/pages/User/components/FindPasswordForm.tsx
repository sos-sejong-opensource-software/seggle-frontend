import { Label, Input, Button, ErrorMessage } from '@/components';
import { PAGE } from '@/constants';

import { INPUT, FINDPASSWORD_ERROR } from '../constants';
import { useFindPasswordForm } from '../hooks';

type FindPasswordFormProps = {
  inputList: ReturnType<typeof useFindPasswordForm>;
  onSubmit: (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => void;
};

export function FindPasswordForm({ inputList, onSubmit }: FindPasswordFormProps) {
  const isFormValid = Object.values(inputList).every(({ value, error }) => value && !error);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      {Object.entries(inputList).map(([key, { type, value, error, handleInputChange }]) => (
        <>
          <Label htmlFor="email">{INPUT[key.toUpperCase()]}</Label>
          <Input
            type={type}
            id="EMAIL"
            value={value}
            onChange={(e) => {
              handleInputChange(e, inputList.currentEmail.value);
            }}
          />
          {error && <ErrorMessage>{FINDPASSWORD_ERROR[key.toUpperCase()]}</ErrorMessage>}
        </>
      ))}
      <Button disabled={!isFormValid}>{PAGE['FIND_PASSWORD']}</Button>
    </form>
  );
}
