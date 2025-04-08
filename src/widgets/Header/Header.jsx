import React, { useEffect } from "react";
import LayoutTransition from "../../components/LayoutTransition/LayoutTransition";
import Typewriter from "../../components/Typewriter/Typewriter";
import "./Header.css";

export default function Header() {
  return (
    <LayoutTransition>
      <div className="box-header">
        <Typewriter
          className="typing-space"
          text={"Метрополетен города Москва"}
        />
      </div>
    </LayoutTransition>
  );
}
