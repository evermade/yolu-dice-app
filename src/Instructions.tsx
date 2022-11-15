import { AnimatePresence, motion } from "framer-motion";

const Instructions = ({ isInstructionsVisible }: { isInstructionsVisible: boolean }) => (
  <AnimatePresence>
    {isInstructionsVisible && (
      <motion.div
        className="instructions"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        Drag to roll
      </motion.div>
    )}
  </AnimatePresence>
);

export default Instructions;
