import React from "react";
import { motion } from "motion/react";

export default function Typewriter({ text, ...prop }) {
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
  };

  const sentenceVariants = {
    hidden: {},
    visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
  };

  return (
    <motion.p
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      {...prop}
    >
      {text.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
}
