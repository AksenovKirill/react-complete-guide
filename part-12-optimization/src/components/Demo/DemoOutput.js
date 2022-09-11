import React, { memo } from "react";
import { MyParagraph } from "../MyParagraph";

export const DemoOutput = memo((props) => {
  console.log("DEMO OUTPUT");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
});
