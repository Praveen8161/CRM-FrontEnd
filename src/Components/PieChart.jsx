/* eslint-disable react/prop-types */
import { ArcElement, CategoryScale, Chart } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement, CategoryScale);

function PolarChart({ role, allData }) {
  const data = {
    labels: [
      "Total Tickets",
      "Resolved Tickets",
      "Total Services",
      role === "user" ? "current Services" : "Total Users",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          allData.totalTickets,
          allData.resolvedTicket,
          allData.totalService,
          role === "user" ? allData.currSer : allData.totalUser,
        ],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(54, 162, 235)",
        ],
        borderColor: "black",
        borderWidth: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "black",
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default PolarChart;
