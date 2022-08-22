import React from "react";
import { Chart } from "components/ChartBar/Chart";
import { chartDataPoints } from "assets/const";

export const ExpensesChart = (props) => {
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};
