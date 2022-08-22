import React, { useState } from "react";
import { Card } from "../UI/Card";
import { ExpensesFilter } from "./ExpensesFilter/ExpensesFilter";
import { ExpensesList } from "./ExpensesList/ExpensesList";
import { ExpensesChart } from "./ExpensesChart/ExpensesChart";
import "./Expenses.css";

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
