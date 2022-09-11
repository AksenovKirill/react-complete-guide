import React, { useState, useCallback } from "react";

import "./App.css";
import { DemoOutput } from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("APP RUNNING");

  const handleToogleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const handleToggleAllow = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={handleToggleAllow}>Allow Toggle!</Button>
      <Button onClick={handleToogleParagraph}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
