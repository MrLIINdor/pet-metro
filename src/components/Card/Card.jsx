import React, { useState } from "react";
import { motion } from "motion/react";
import "./Card.css";
import DrawerLine from "../DrawerLine/DrawerLine";

export default function Card({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div whileHover={{ scale: 1.2 }} onClick={() => setIsOpen(!isOpen)}>
      <motion.div whileTap={{ scale: 0.8 }} className="box-card">
        <div className="box-line">
          <div
            style={{ backgroundColor: `#${data?.hex_color}` }}
            className="color-line"
          />
          {data?.name}
        </div>

        <DrawerLine
          title={
            <div className="box-line">
              <div
                style={{ backgroundColor: `#${data?.hex_color}` }}
                className="color-line"
              />
              {data?.name}
            </div>
          }
          width={380}
          closable={false}
          className="box-drawer"
          data={data.stations}
          open={isOpen}
          onClose={() => setIsOpen(!isOpen)}
        />
      </motion.div>
    </motion.div>
  );
}
