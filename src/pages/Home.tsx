import Button from "../components/Button";
import Input from "../components/Input";
import Label from "../components/Label";
import Form from "../components/Form";

const Home = () => {
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

    </>
  );
};

export default Home;