import React, { useState, useEffect } from 'react';
import StyledVaccineData from './StyledVaccineData';
import axios from 'axios';
import ChartBox from 'components/organisms/ChartBox/ChartBox';
import Headline from 'components/atoms/Headline/Headline';
import Loader from 'components/molecules/Loader/Loader';
import { convertDate } from 'assets/helpers';
import { theme } from 'assets/styles/theme';

const VaccineData = () => {
  const [globalDataset, setGlobalDataset] = useState(null);
  const [countriesDataset, setCountriesDataset] = useState(null);

  const renderGlobalChart = (data) => {
    const data2 = Object.keys(data).map((key) => [convertDate(key), data[key]]);
    return {
      datasets: [
        {
          label: 'Total',
          data: data2.map((el) => el[1]),
          borderColor: theme.colors.chartBorderBlue,
          backgroundColor: theme.colors.chartBgBlue,
          pointRadius: 2,
        },
      ],
      labels: data2.map((el) => el[0]),
    };
  };

  const renderCountriesChart = (data) => {
    const data2 = data.map((el) => {
      const data = Object.keys(el.timeline).map((key) => [convertDate(key), el.timeline[key]]);
      const datasets = {
        datasets: [
          {
            label: 'Total',
            data: data.map((el) => el[1]),
            borderColor: theme.colors.chartBorderBlue,
            backgroundColor: theme.colors.chartBgBlue,
            pointRadius: 2,
          },
        ],
        labels: data.map((el) => el[0]),
      };
      return [{ country: el.country, datasets: datasets }, data.map((el) => el[0])];
    });
    const labels = data2[0][1];
    const data3 = data2.map((el) => el[0]);

    return [data3, labels, data.map((el) => el.country)];
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    let config = { cancelToken: source.token };
    axios
      .get('https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=all', config)
      .then((response) => setGlobalDataset(renderGlobalChart(response.data)))
      .catch((err) => console.error(err));
    axios
      .get('https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=all', config)
      .then((response) => setCountriesDataset(renderCountriesChart(response.data)))
      .catch((err) => {});

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <StyledVaccineData>
      {countriesDataset && globalDataset ? (
        <>
          <Headline size="2">Szczepienia</Headline>
          <ChartBox datasets={globalDataset.datasets} labels={globalDataset.labels}>
            Szczepienia na świecie
          </ChartBox>
          <ChartBox labels={countriesDataset[1]} data={countriesDataset[0]} countries={countriesDataset[2]}>
            Szczepienia wg. kraju
          </ChartBox>
        </>
      ) : (
        <Loader />
      )}
    </StyledVaccineData>
  );
};

export default VaccineData;
