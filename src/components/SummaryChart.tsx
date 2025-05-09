import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type DataItem = {
  _id: string;
  count: number;
};

type Props = {
  data: DataItem[];
  title: string;
};

const SummaryChart: React.FC<Props> = ({ data, title }) => {
  const chartData = {
    labels: data.map((d) => d._id),
    datasets: [
      {
        label: 'Jumlah Pelanggan',
        data: data.map((d) => d.count),
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)', // blue
          'rgba(239, 68, 68, 0.7)',  // red
          'rgba(16, 185, 129, 0.7)', // green
          'rgba(250, 204, 21, 0.7)', // yellow
          'rgba(168, 85, 247, 0.7)', // purple
        ],
        borderColor: '#fff',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="p-5 rounded-2xl shadow-md bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
      <h3 className="text-xl font-bold text-gray-700 mb-4">{title}</h3>
      <div className="relative h-64 w-full">
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default SummaryChart;
