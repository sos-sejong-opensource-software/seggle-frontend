import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const Form: React.FC<Props> = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <Label desc="문제 제목"></Label>
      <Input desc="문제명을 입력해주세요" setTodo={() => console.log("Input")}></Input>
      <Button additionalProps="This is button" onClick={() => console.log("Button Clicked")} type="submit">
        문제 등록
      </Button>
    </form>
  );
};

export default Form;