import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem/ExpenseItem";
import { ExpensesFilter } from "./ExpensesFilter/ExpensesFilter";
import { Card } from "../UI/Card";
import "./Expenses.css";

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleChangeFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} handleChangeFilter={handleChangeFilter} />
      {filteredExpenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </Card>
  );
};
