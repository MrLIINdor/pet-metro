import React from "react";
import LayoutTransition from "../../components/LayoutTransition/LayoutTransition";
import "./Footer.css";

export default function Footer() {
  return (
    <LayoutTransition>
      <div className="box-footer">
        MrLIINdor - All Rights Reserved © {new Date().getFullYear()}
      </div>
    </LayoutTransition>
  );
}
