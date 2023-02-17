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
          <Label htmlFor="email">가입한 이메일 주소를 입력해주세요.</Label>
          <Input
            type={type}
            id="EMAIL"
            value={value}
            placeholder="이메일"
            onChange={(e) => {
              handleInputChange(e, inputList.currentEmail.value);
            }}
          />
          {error && <ErrorMessage>{FINDPASSWORD_ERROR[key.toUpperCase()]}</ErrorMessage>}
        </>
      ))}
      <Button disabled={!isFormValid}>메일 전송</Button>
    </form>
  );
}
