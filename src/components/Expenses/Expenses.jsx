import React, { useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { Card } from "../UI/Card";
import "./Expenses.css";
import { ExpensesFilter } from "./ExpensesFilter";

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleChangeFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} handleChangeFilter={handleChangeFilter} />
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </Card>
  );
};
