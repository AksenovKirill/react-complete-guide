import React from "react";
import { ChartBar } from "./ChartBar";
import "./Chart.css";

export const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const total = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar key={label} value={value} maxValue={total} label={label} />
      ))}
    </div>
  );
};
