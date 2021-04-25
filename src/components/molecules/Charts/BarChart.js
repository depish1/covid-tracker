import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartContainer from './StyledChart';

const BarChart = ({ datasets, labels }) => {
  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <ChartContainer>
      <Bar
        data={chartData}
        height={400}
        width={800}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </ChartContainer>
  );
};

export default BarChart;
