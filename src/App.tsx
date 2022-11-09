import React, { useState } from "react";
import { motion } from "framer-motion";

import "./App.css";

function App() {
  const [face, setFace] = useState(1 + Math.floor(Math.random() * 5));
  const [angle, setAngle] = useState(180);

  const roll = () => {
    const index = 1 + Math.floor(Math.random() * 5);
    const newAngle = Math.floor(Math.random() * 8) * 360  + 180;

    setFace(index);
    setAngle(newAngle);
  };

  return (
    <div style={{ "--angle": `${angle}deg` } as React.CSSProperties}>
      <div className="decorators">
        <div className="decorator"></div>
        <div className="decorator"></div>
        <div className="decorator"></div>
      </div>
      <motion.div
        className="diceWrap"
        whileTap={{ scale: 1.5, cursor: "grabbing" }}
        drag="y"
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
        onDragEnd={() => roll()}
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <div className={`dice face-${face} `}>
          <div className="diceFace front"></div>
          <div className="diceFace up"></div>
          <div className="diceFace left"></div>
          <div className="diceFace right"></div>
          <div className="diceFace bottom"></div>
          <div className="diceFace back"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
