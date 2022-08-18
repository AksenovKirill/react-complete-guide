import React, { useState } from "react";
import { ExpenseForm } from "../Expenses/ExpenseForm/ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ handleAddExpense }) => {
  const [openExpenseForm, setOpenExpenseForm] = useState(false);

  const handleSaveData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    handleAddExpense(expenseData);
  };

  const handleClickForm = () => {
    setOpenExpenseForm(!openExpenseForm);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        handleClickForm={handleClickForm}
        open={openExpenseForm}
        handleSaveData={handleSaveData}
      />
    </div>
  );
};
