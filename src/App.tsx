import React, { useState } from "react";

import Background from "./Background";
import Dice from "./Dice";
import Draggable from "./Draggable";
import Logo from "./Logo";
import Marquee from "./Marquee";
import Instructions from "./Instructions";

import useRoll from "./useRoll";

import "./App.css";

const App = () => {
  const [roll, face, rotation] = useRoll();

  const [isInstructionsVisible, setIsInstructionsVisible] = useState(true);
  const hideInstructions = () => setIsInstructionsVisible(false);
  
  return (
    <div style={{ "--rotation": `${rotation}deg` } as React.CSSProperties}>
      <Background />
      <Marquee />
      <Draggable onDragEnd={() => roll()} onTapStart={() => hideInstructions()}>
        <Dice face={face} />
      </Draggable>
      <Instructions isInstructionsVisible={isInstructionsVisible} />
      <Logo />
    </div>
  );
};

export default App;
