import React from "react";
import { motion } from "framer-motion";

import "./App.css";

function App() {
  return (
    <div>
      <div className="decorators">
        <div className="decorator"></div>
        <div className="decorator"></div>
        <div className="decorator"></div>
      </div>
      <motion.div
        className="diceWrap"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
        drag="y"
        dragConstraints={{ top: -10, bottom: 10 }}
      >
        <div className="dice rolling">
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
