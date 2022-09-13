import { useState, useEffect } from "react";
import { useCounter } from "../hooks/useCounter";
import Card from "./Card";

const ForwardCounter = () => {
  const { counter, setCounter } = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
