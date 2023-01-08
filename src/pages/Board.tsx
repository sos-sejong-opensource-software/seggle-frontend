import Button from "../components/Button";

const Board = () => {
  return (
    <Button additionalProps="This is button" onClick={() => console.log("Button Clicked")}>
      글쓰기
    </Button>
  );
};

export default Board;