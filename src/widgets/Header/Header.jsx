import React, { useEffect } from "react";
import LayoutTransition from "../../components/LayoutTransition/LayoutTransition";
import "./Header.css";
import Typewriter from "../../components/Typewriter/Typewriter";

export default function Header() {
  return (
    <LayoutTransition>
      <div className="box">
        <Typewriter
          className="typing-space"
          text={"Метрополетен города Москва"}
        />
      </div>
    </LayoutTransition>
  );
}
