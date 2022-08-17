import React, { memo } from "react";
import "./ExpenseDate.css";

export const ExpenseDate = memo(({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month} </div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day"> {day} </div>
    </div>
  );
});
