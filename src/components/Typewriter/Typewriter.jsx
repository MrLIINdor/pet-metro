import React from "react";
import "./Typewriter.css";

export default function Typewriter({ text, ...prop }) {
  return (
    <p {...prop}>
      {text?.split("").map((char, i) => (
        <span
          key={`${i}-${char}`}
          style={{ animationDelay: `${i * 0.07}s` }}
          className="typewriter-char"
        >
          {char}
        </span>
      ))}
    </p>
  );
}
