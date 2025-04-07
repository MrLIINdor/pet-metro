import { Drawer, Timeline } from "antd";
import React from "react";

export default function DrawerLine({ data, ...props }) {
  return (
    <Drawer {...props}>
      <Timeline
        mode={"alternate"}
        items={data.map((el) => ({
          children: el.name,
          color: `#${el.line.hex_color}`,
        }))}
      />
    </Drawer>
  );
}
