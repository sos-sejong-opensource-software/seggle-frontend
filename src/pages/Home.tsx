import Button from "../components/Button";
import Input from "../components/Input";

const Board = () => {
  return (
    <>
     <h1 className="text-3xl text-blue-400">버튼</h1>
      <Button additionalProps="This is button" onClick={() => console.log("Button Clicked")}>
        저장
      </Button>
      <h1 className="text-3xl text-blue-400">인풋</h1>
      <Input desc="대회명을 입력해주세요" setTodo={() => console.log("Input")}></Input>
    </>
  );
};

export default Board;