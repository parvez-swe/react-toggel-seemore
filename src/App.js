import React, {useState} from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";

function App() {
  const [showNewParagraph, setShowNewParagraph] = useState(false);
  console.log("app is running");
  const toggleParagraph = () => {
    setShowNewParagraph((PrevShow) => !PrevShow);
  };
  return (
    <div className="app">
      <h1>Hi there! </h1>
      <DemoOutput show={showNewParagraph} />
      <Button onClick={toggleParagraph}>
        {!showNewParagraph ? "see more" : "see less"}
      </Button>
    </div>
  );
}

export default App;
