import React, { memo } from "react";
import { MyParagraph } from "../MyParagraph";

export const DemoOutput = memo((props) => {
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
});
