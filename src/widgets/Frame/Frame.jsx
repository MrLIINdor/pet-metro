import React from "react";
import Card from "../../components/Card/Card";
import LayoutTransition from "../../components/LayoutTransition/LayoutTransition";
import "./Frame.css";

export default function Frame({ data }) {
  console.log(data);

  let lazyLoad = {
    visible: (i) => {
      const delay = i * 0.5;

      return {
        transition: {
          opacity: { delay, duration: 0.5 },
        },
      };
    },
    hidden: { opacity: 0 },
  };

  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <div className="box-frame">
      {data?.lines?.map((el, index) => (
        <LayoutTransition
          key={index}
          variants={variants}
          custom={index}
          initial="hidden"
          animate="visible"
        >
          <Card data={el} />
        </LayoutTransition>
      ))}
    </div>
  );
}
