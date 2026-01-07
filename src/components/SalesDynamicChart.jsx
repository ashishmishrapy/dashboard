import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip
);

export default function SalesDynamicChart() {
  const data = {
    labels: ["W1", "", "W3", "", "W5", "", "W7", "", "W9", "", "W11"],
    datasets: [
      // Dotted comparison line
      {
        data: [42, 45, 47, 46, 50, 48, 44, 46, 49, 48, 50],
        borderColor: "rgba(229,72,109,0.35)",
        borderDash: [4, 4],
        tension: 0.4,
        pointRadius: 0,
      },

      // Main red line
      {
        data: [40, 43, 46, 45, 49, 47, 42, 45, 48, 47, 52],
        borderColor: "#e5486d",
        backgroundColor: "transparent",
        tension: 0.45,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: "#9ca3af",
          font: { size: 12 },
        },
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-[#f6f5f3] rounded-2xl px-2 py-1">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm text-gray-700">Sales dynamic</h3>
        <span className="text-gray-400">↗</span>
      </div>

      {/* Chart */}
      <div className="relative h-[100px]">
        <Line data={data} options={options} />
      </div>

      {/* Timeline bar */}
      <div className="mt-1 relative h-1 rounded-full bg-gradient-to-r from-red-400 via-yellow-300 to-green-400" />

      {/* Timeline icons */}
      <div className="relative mt-[-18px] flex justify-between px-6 text-sm">
        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          Be
        </span>
        <span className="bg-pink-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          ◎
        </span>
        <span className="bg-blue-400 text-white rounded-full w-6 h-6 flex items-center justify-center">
          ★
        </span>
      </div>

    </div>
  );
}
