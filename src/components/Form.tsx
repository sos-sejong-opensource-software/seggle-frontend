import React from 'react';

import { Button, Input, Label } from '@/components';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<Props> = ({ todo, setTodo }: Props) => {
  return (
    <form>
      <Label>문제 제목</Label>
      <Input placeholder="문제명을 입력해주세요onChange={() => console.log('Input')}" />
      <Button type="submit" onClick={() => console.log('Button Clicked')}>
        문제 등록
      </Button>
    </form>
  );
};

export default Form;
