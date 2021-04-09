import React, { useState, useEffect } from 'react';
import StyledHome, { Wrapper } from './StyledHome';
import BasicData from 'components/organisms/BasicData/BasicData';
import Headline from 'components/atoms/Headline/Headline';
import axios from 'axios';
import Loader from 'components/molecules/Loader/Loader';
import corona from 'assets/corona.png';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();
    let config = { cancelToken: source.token };

    axios
      .get('https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=false', config)
      .then((response) => setData(response.data))
      // .then((response) => console.log(response.data))
      .catch((err) => {});

    return () => {
      source.cancel();
    };
  }, []);

  const renderContent = (data) => {
    if (data) {
      return (
        <>
          <Headline size="2">Podstawowe dane</Headline>
          <img src={corona} alt="Corona" />
          <Wrapper>
            <BasicData className="BasicData" sum={data.active} today={data.todayCases} oneMilion={data.casesPerOneMillion} type="cases"></BasicData>
            <BasicData
              className="BasicData"
              sum={data.recovered}
              today={data.todayRecovered}
              oneMilion={data.recoveredPerOneMillion}
              type="recovered"
            ></BasicData>
            <BasicData
              className="BasicData"
              sum={data.deaths}
              today={data.todayDeaths}
              oneMilion={data.deathsPerOneMillion}
              type="deaths"
            ></BasicData>
          </Wrapper>
        </>
      );
    } else {
      return <Loader />;
    }
  };
  return <StyledHome>{renderContent(data)}</StyledHome>;
};

export default Home;
