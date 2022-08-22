import React, { memo } from "react";
import "./Card.css";

export const Card = memo(({ className, children }) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
});
