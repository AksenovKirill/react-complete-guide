import React, { memo } from "react";
import "./Card.css";

export const Card = memo((props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
});
