import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

const LineContainer = styled.div`
  height: 50vh;
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    width: 80vw;
  }

  @media only screen and (max-width: 600px) {
    width: 88vw;
  }
`;

const LineChart = ({ datasets, labels }) => {
  const chartData = {
    labels: labels,
    datasets: datasets,
  };
  return (
    <LineContainer>
      <Line
        data={chartData}
        height={400}
        width={800}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </LineContainer>
  );
};

export default LineChart;
