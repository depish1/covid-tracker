import React, { useState, useEffect } from 'react';
import LineChart from 'components/molecules/Charts/LineChart';
import BarChart from 'components/molecules/Charts/BarChart';
import SelectForm from 'components/molecules/SelectForm/SelectFrom';
import Headline from 'components/atoms/Headline/Headline';
import StyledChartBox from './StyledChartBox';
import Loader from 'components/molecules/Loader/Loader';

const ChartBox = ({ labels, data, countries, callback, children, selectedCountry, isBarChart, isLoader }) => {
  const [dataset, setDataset] = useState(data);

  useEffect(() => {
    setDataset(data);
  }, [data]);

  return (
    <StyledChartBox>
      <Headline size="4" isAdditionalMargin={selectedCountry ? false : true}>
        {children}
      </Headline>
      {countries ? (
        <SelectForm countries={countries} callback={callback} data={data} selectedCountry={selectedCountry} isDisabled={dataset ? false : true} />
      ) : null}
      {!isLoader ? isBarChart ? <BarChart datasets={dataset} labels={labels} /> : <LineChart datasets={dataset} labels={labels} /> : <Loader />}
    </StyledChartBox>
  );
};

export default ChartBox;
