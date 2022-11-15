import React from "react";
import { motion } from "framer-motion";

interface DraggableProps {
  children: React.ReactNode;
  onDragEnd: () => void;
  onTapStart: () => void;
}

const Draggable = ({ onDragEnd, onTapStart, children }: DraggableProps) => (
  <motion.div
    className="diceWrap"
    whileTap={{ scale: 1.5, cursor: "grabbing" }}
    drag="y"
    dragSnapToOrigin
    dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
    onDragEnd={onDragEnd}
    onTapStart={onTapStart}
    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
  >
    {children}
  </motion.div>
);

export default Draggable;
