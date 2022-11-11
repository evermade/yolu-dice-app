import React from "react";

import Background from "./Background";
import Dice from "./Dice";
import Draggable from "./Draggable";
import useRoll from "./useRoll";

import "./App.css";

const App = () => {
  const [roll, face, rotation] = useRoll();

  return (
    <div style={{ "--rotation": `${rotation}deg` } as React.CSSProperties}>
      <Background />
      <Draggable onDragEnd={() => roll()}>
        <Dice face={face} />
      </Draggable>
    </div>
  );
};

export default App;
