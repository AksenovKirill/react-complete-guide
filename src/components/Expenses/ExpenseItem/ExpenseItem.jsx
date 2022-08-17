import React, { useState } from "react";
import { Card } from "../../UI/Card";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = ({ item }) => {
  const [title, setTitle] = useState(item.title);

  const handleClick = () => {
    setTitle("updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> ${item.amount} </div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};
