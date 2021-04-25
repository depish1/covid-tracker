import React from 'react';
import { Line } from 'react-chartjs-2';
import ChartContainer from './StyledChart';

const LineChart = ({ datasets, labels }) => {
  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <ChartContainer>
      <Line
        data={chartData}
        height={400}
        width={800}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  fontSize: 10,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontSize: 10,
                },
              },
            ],
          },
        }}
      />
    </ChartContainer>
  );
};

export default LineChart;
