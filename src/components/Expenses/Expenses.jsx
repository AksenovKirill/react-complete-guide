import React, { memo } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import "./Expenses.css";

export const Expenses = memo(() => {
  const expenses = [
    { id: "exp1", title: "Pass", amount: 94.64, date: new Date(2020, 1, 8) },
    { id: "exp2", title: "Toilet Paper", amount: 24.33, date: new Date(2021, 2, 14) },
    { id: "exp3", title: "Drugs", amount: 194.7, date: new Date(2019, 4, 24) },
    { id: "exp4", title: "Car Insurance", amount: 390.01, date: new Date(2012, 3, 28) },
  ];

  return (
    <Card className="expenses">
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </Card>
  );
});
