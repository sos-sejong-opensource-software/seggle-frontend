import { Label, Input, Button, ErrorMessage } from '@/components';
import { PAGE } from '@/constants';

import { INPUT, RESIGN_ERROR } from '../constants';
import { useResignForm } from '../hooks';

type ResignFormProps = {
  inputList: ReturnType<typeof useResignForm>;
  onSubmit: (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => void;
};

export function ResignForm({ inputList, onSubmit }: ResignFormProps) {
  const isFormValid = Object.values(inputList).every(({ value, error }) => value && !error);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      {Object.entries(inputList).map(([key, { type, value, error, handleInputChange }]) => (
        <>
          <Label htmlFor="email">현재 비밀번호를 입력해주세요.</Label>
          <Input
            type={type}
            id={key}
            value={value}
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => {
              handleInputChange(e, inputList.currentPassword.value);
            }}
          />
          {error && <ErrorMessage>{RESIGN_ERROR[key.toUpperCase()]}</ErrorMessage>}
        </>
      ))}
      <Button disabled={!isFormValid}>{PAGE['RESIGN']}</Button>
    </form>
  );
}
