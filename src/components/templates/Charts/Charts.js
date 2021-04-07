import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { convertDate } from 'assets/helpers';
import { theme } from 'assets/styles/theme';
import StyledCharts from './StyledCharts';
import Headline from 'components/atoms/Headline/Headline';
import ChartBox from 'components/organisms/ChartBox/ChartBox';
import Loader from 'components/molecules/Loader/Loader';

const Charts = () => {
  const [globalDataset, setGlobalDataset] = useState(null);
  const [countriesDataset, setCountriesDataset] = useState(null);

  const renderGlobalChart = (data) => {
    const cases = data.cases;
    const recovered = data.recovered;
    const deaths = data.deaths;
    const data2 = Object.keys(cases).map((key) => [convertDate(key), cases[key]]);
    return {
      datasets: [
        {
          label: 'Zarażeni',
          data: Object.keys(cases)
            .map((key) => [convertDate(key), cases[key]])
            .map((el) => el[1]),
          borderColor: theme.colors.chartBorderGrey,
          backgroundColor: theme.colors.chartBgGrey,

          pointRadius: 1,
        },
        {
          label: 'Wyzdrowieli',
          data: Object.keys(recovered)
            .map((key) => [convertDate(key), recovered[key]])
            .map((el) => el[1]),
          borderColor: theme.colors.chartBorderGreen,
          backgroundColor: theme.colors.chartBgGreen,
          pointRadius: 1,
        },
        {
          label: 'Zmarli',
          data: Object.keys(deaths)
            .map((key) => [convertDate(key), deaths[key]])
            .map((el) => el[1]),
          borderColor: theme.colors.chartBorderRed,
          backgroundColor: theme.colors.chartBgRed,
          pointRadius: 1,
        },
      ],
      labels: data2.map((el) => el[0]),
    };
  };

  const renderCountriesChart = (data) => {
    const data2 = data.map((el) => {
      const cases = el.timeline.cases;
      const recovered = el.timeline.recovered;
      const deaths = el.timeline.deaths;

      const data2 = Object.keys(cases).map((key) => [convertDate(key), cases[key]]);

      const datasets = {
        datasets: [
          {
            label: 'Zarażeni',
            data: Object.keys(cases)
              .map((key) => [convertDate(key), cases[key]])
              .map((el) => el[1]),
            borderColor: theme.colors.chartBorderGrey,
            backgroundColor: theme.colors.chartBgGrey,
            pointRadius: 1,
          },
          {
            label: 'Wyzdrowieli',
            data: Object.keys(recovered)
              .map((key) => [convertDate(key), recovered[key]])
              .map((el) => el[1]),
            borderColor: theme.colors.chartBorderGreen,
            backgroundColor: theme.colors.chartBgGreen,
            pointRadius: 1,
          },
          {
            label: 'Zmarli',
            data: Object.keys(deaths)
              .map((key) => [convertDate(key), deaths[key]])
              .map((el) => el[1]),
            borderColor: theme.colors.chartBorderRed,
            backgroundColor: theme.colors.chartBgRed,
            pointRadius: 1,
          },
        ],
        labels: data2.map((el) => el[0]),
      };
      return [{ country: el.country, datasets: datasets }, data2.map((el) => el[0])];
    });
    const labels = data2[0][1];
    const data3 = data2.map((el) => el[0]);

    return [data3, labels, data.map((el) => el.country)];
  };

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
      .then((response) => setGlobalDataset(renderGlobalChart(response.data)))
      .catch((err) => console.error(err));
    axios
      .get('https://disease.sh/v3/covid-19/historical?lastdays=all')
      .then((response) => setCountriesDataset(renderCountriesChart(response.data)))
      .catch((err) => console.error(err));
  }, []);
  return (
    <StyledCharts>
      <Headline size="2">Covid-19 Wykresy</Headline>
      {countriesDataset && globalDataset ? (
        <>
          <ChartBox datasets={globalDataset.datasets} labels={globalDataset.labels}>
            Covid-19 na świecie
          </ChartBox>
          <ChartBox labels={countriesDataset[1]} data={countriesDataset[0]} countries={countriesDataset[2]}>
            Szczepienia wg. kraju
          </ChartBox>
        </>
      ) : (
        <Loader />
      )}
    </StyledCharts>
  );
};

export default Charts;
