import { useState } from "react";

const useRoll = () => {
  const [face, setFace] = useState(1 + Math.floor(Math.random() * 5));
  const [rotation, setRotation] = useState(180);

  const roll = () => {
    const index = 1 + Math.floor(Math.random() * 5);
    const newRotation = Math.floor(Math.random() * 8) * 360 + 180;

    setFace(index);
    setRotation(newRotation);
  };

  return [roll, face, rotation] as const;
}

export default useRoll;
