import React from "react";
import { Chart } from "components/ChartBar/Chart";
import { chartDataPoints } from "assets/const";

export const ExpensesChart = ({ expenses }) => {
  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};
