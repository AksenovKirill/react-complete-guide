import { useState } from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    { id: "exp1", title: "Pass", amount: 94.64, date: new Date(2020, 1, 8) },
    { id: "exp2", title: "Toilet Paper", amount: 24.33, date: new Date(2021, 2, 14) },
    { id: "exp3", title: "Drugs", amount: 194.7, date: new Date(2019, 4, 24) },
    { id: "exp4", title: "Car Insurance", amount: 390.01, date: new Date(2021, 3, 28) },
  ]);

  const handleAddExpense = (data) => {
    console.log(data);
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense handleAddExpense={handleAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
