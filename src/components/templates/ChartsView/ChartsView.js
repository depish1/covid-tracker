import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  mapGlobalSumData_charts,
  mapGlobalDailyData_charts,
  mapCountrySumData_charts,
  mapCountryDailyData_charts,
  mapCountriesArray,
} from 'assets/helpers';
import StyledCharts from './StyledCharts';
import Headline from 'components/atoms/Headline/Headline';
import ChartBox from 'components/organisms/ChartBox/ChartBox';

const ChartsView = () => {
  const [globalSumData, setGlobalSumData] = useState(null);
  const [globalDailyData, setGlobalDailyData] = useState(null);
  const defaultCountry = 'Poland';
  const [selectedCountrySum, setSelectedCountrySum] = useState(defaultCountry);
  const [selectedCountryDaily, setSelectedCountryDaily] = useState(defaultCountry);
  const [countrySumData, setCountrySumData] = useState(null);
  const [countryDailyData, setCountryDailyData] = useState(null);
  const [countriesArray, setCountriesArray] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    let config = { cancelToken: source.token };

    axios
      .get('https://disease.sh/v3/covid-19/historical/all?lastdays=all', config)
      .then((response) => {
        setGlobalSumData(mapGlobalSumData_charts(response.data));
        setGlobalDailyData(mapGlobalDailyData_charts(response.data));
      })
      .catch((err) => console.error(err));

    axios
      .get('https://disease.sh/v3/covid-19/historical?lastdays=1', config)
      .then((response) => setCountriesArray(mapCountriesArray(response.data)))
      .catch((err) => console.error(err));

    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    if (!selectedCountrySum) return;
    setCountrySumData(null);
    const source = axios.CancelToken.source();
    let config = { cancelToken: source.token };
    axios
      .get(`https://disease.sh/v3/covid-19/historical/${selectedCountrySum}?lastdays=all`, config)
      .then((response) => setCountrySumData(mapCountrySumData_charts(response.data)))
      .catch((err) => {});
  }, [selectedCountrySum]);

  useEffect(() => {
    if (!selectedCountryDaily) return;
    setCountryDailyData(null);
    console.log('xd');
    const source = axios.CancelToken.source();
    let config = { cancelToken: source.token };
    axios
      .get(`https://disease.sh/v3/covid-19/historical/${selectedCountryDaily}?lastdays=all`, config)
      .then((response) => setCountryDailyData(mapCountryDailyData_charts(response.data)))
      .catch((err) => {});
  }, [selectedCountryDaily]);

  return (
    <StyledCharts>
      <>
        <Headline size="2">Wykresy</Headline>
        <ChartBox data={globalSumData?.datasets} labels={globalSumData?.labels} isBarChart={false} isLoader={globalSumData ? false : true}>
          Covid-19 na świecie przyrostowo
        </ChartBox>
        <ChartBox data={globalDailyData?.datasets} labels={globalDailyData?.labels} isBarChart={true} isLoader={globalDailyData ? false : true}>
          Covid-19 na świecie dziennie
        </ChartBox>
        <ChartBox
          data={countrySumData?.data}
          labels={countrySumData?.labels}
          countries={countriesArray}
          callback={setSelectedCountrySum}
          selectedCountry={selectedCountrySum}
          isBarChart={false}
          isLoader={countrySumData ? false : true}
        >
          Covid-19 wg. kraju przyrostowo
        </ChartBox>
        <ChartBox
          data={countryDailyData?.data}
          labels={countryDailyData?.labels}
          countries={countriesArray}
          callback={setSelectedCountryDaily}
          selectedCountry={selectedCountryDaily}
          isBarChart={true}
          isLoader={countryDailyData ? false : true}
        >
          Covid-19 wg. kraju dziennie
        </ChartBox>
      </>
    </StyledCharts>
  );
};

export default ChartsView;
