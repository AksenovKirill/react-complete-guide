import React from "react";
import { ChartBar } from "./ChartBar";
import "./Chart.css";

export const Chart = ({ dataPoints }) => {
  const dataPointValue = dataPoints.map((dataPoint) => dataPoint.value);
  const total = Math.max(...dataPointValue);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint, index) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={total}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
