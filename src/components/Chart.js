import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from "chart.js";
import { Line } from "react-chartjs-2";
import ChartJS from "chart.js/auto";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );

const Chart = ({ chartData }) => {
  const { dates, temps } = chartData;

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Temperature",
        data: temps,
        fill: true,
        borderColor: "#ffafcc",
        backgroundColor: "#ffc8dd",
        yAxisID: "y",
        lineTension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Temperature Chart",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ": " + context.raw;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        // display: false,
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
