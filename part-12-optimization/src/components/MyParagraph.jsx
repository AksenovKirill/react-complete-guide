import React from "react";

export const MyParagraph = ({ children }) => {
  console.log("MyParagraph RUNNING");
  return <p>{children}</p>;
};
