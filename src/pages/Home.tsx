import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Form from "../components/Form";
import Modal from "../components/Modal";
import Pagination from "../components/Pagination";

export default function Home () {
  const [currentPage, setCurrentPage] = React.useState(1);
  const lastPage = 20;

  return (
    <>
     <h1 className="text-3xl text-blue-400 px-3 py-3">Button</h1>
      <Button additionalProps="This is button" onClick={() => console.log("Button Clicked")}>
        저장
      </Button>

      <h1 className="text-3xl text-blue-400 px-3 py-4">Input</h1>
      <Input desc="대회명을 입력해주세요" setTodo={() => console.log("Input")}></Input>

      <h1 className="text-3xl text-blue-400 px-3 py-3">Label</h1>
      <Label desc="이메일"></Label>

      <h1 className="text-3xl text-blue-400 px-3 py-3">Form</h1>
      <Form todo="form" setTodo={() => console.log("This is form")}></Form>

      <h1 className="text-3xl text-blue-400 px-3 py-3">Modal</h1>
      <Modal></Modal>

      <h1 className="text-3xl text-blue-400 px-3 py-3">Pagination</h1>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        maxLength={7}
        setCurrentPage={setCurrentPage}
      />    
    </>
  );
};
