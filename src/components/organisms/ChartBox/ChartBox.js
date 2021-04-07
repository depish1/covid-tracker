import React, { useState, useEffect } from 'react';
import LineChart from 'components/molecules/LineChart/LineChart';
import SelectForm from 'components/molecules/SelectForm/SelectFrom';
import Headline from 'components/atoms/Headline/Headline';
import StyledChartBox from './StyledChartBox';

const ChartBox = ({ datasets = null, labels, data = null, countries = null, children }) => {
  const [dataset, setDataset] = useState(datasets);

  useEffect(() => {
    if (data) {
      const dataset = data.filter((el) => el.country === 'Poland')[0].datasets.datasets;
      setDataset(dataset);
    }
  }, [data]);

  const contentToRender = (data) => {
    if (data) {
      return (
        <>
          <SelectForm countries={countries} callback={setDataset} data={data} />
          <LineChart datasets={dataset} labels={labels} />
        </>
      );
    } else {
      return <LineChart datasets={dataset} labels={labels} />;
    }
  };
  return (
    <StyledChartBox>
      <Headline size="4">{children}</Headline>
      {contentToRender(data)}
    </StyledChartBox>
  );
};

export default ChartBox;
