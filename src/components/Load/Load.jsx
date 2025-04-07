import React from "react";
import { motion } from "motion/react";
import "./Load.css";

export default function Load() {
  let draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,

        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const image = {
    maxWidth: "80vw",
  };

  const shape = {
    strokeWidth: 10,
    strokeLinecap: "round",
    fill: "transparent",
  };

  return (
    <div className="load-box">
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
        style={image}
      >
        <motion.rect
          width="140"
          height="140"
          x="30"
          y="30"
          rx="20"
          stroke="#8EE4AF"
          variants={draw}
          custom={1}
          style={shape}
        />

        <motion.rect
          width="140"
          height="140"
          x="220"
          y="30"
          rx="20"
          stroke="#e85a4f"
          variants={draw}
          custom={2}
          style={shape}
        />

        <motion.rect
          width="140"
          height="140"
          x="410"
          y="30"
          rx="20"
          stroke="#8EE4AF"
          variants={draw}
          custom={3}
          style={shape}
        />

        <motion.rect
          width="140"
          height="140"
          x="30"
          y="230"
          rx="20"
          stroke="#e85a4f"
          variants={draw}
          custom={2}
          style={shape}
        />

        <motion.rect
          width="140"
          height="140"
          x="220"
          y="230"
          rx="20"
          stroke="#8EE4AF"
          variants={draw}
          custom={3}
          style={shape}
        />

        <motion.rect
          width="140"
          height="140"
          x="410"
          y="230"
          rx="20"
          stroke="#e85a4f"
          variants={draw}
          custom={4}
          style={shape}
        />

        <motion.circle
          cx="100"
          cy="500"
          r="80"
          stroke="#8e8d8a"
          variants={draw}
          custom={3}
          style={shape}
        />

        <motion.circle
          cx="480"
          cy="500"
          r="80"
          stroke="#8e8d8a"
          variants={draw}
          custom={5}
          style={shape}
        />
      </motion.svg>
    </div>
  );
}
