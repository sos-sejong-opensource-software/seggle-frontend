import Button from "./components/Button";

const App = () => {
  return (
    <Button additionalProps="Hello World" onClick={() => console.log("Button Clicked")}>
      저장
    </Button>
  );
};

export default App;