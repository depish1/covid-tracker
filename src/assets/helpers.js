import { theme } from 'assets/styles/theme';

const convertDate = (date) => {
  const dateArr = [...date.split('/')];
  return `20${dateArr[2]}-${dateArr[0].length > 1 ? dateArr[0] : '0'.concat(dateArr[0])}-${
    dateArr[1].length > 1 ? dateArr[1] : '0'.concat(dateArr[1])
  }`;
};

const mapDailyResults = (arr) => {
  return arr.map((el, i, arr) => {
    if (i === 0) return el;
    const newEl = el - arr[i - 1];
    return newEl < 0 ? 0 : newEl;
  });
};

export const mapCountriesArray = (data) => {
  return [...new Set(data.map((el) => el.country))];
};

export const mapGlobalSumData_charts = (data) => {
  const cases = data.cases;
  const recovered = data.recovered;
  const deaths = data.deaths;
  const data2 = Object.keys(cases).map((key) => [convertDate(key), cases[key]]);
  return {
    datasets: [
      {
        label: 'Zarażeni',
        data: Object.keys(cases).map((key) => cases[key]),
        borderColor: theme.colors.chartBorderGrey,
        backgroundColor: theme.colors.chartBgGrey,

        pointRadius: 1,
      },
      {
        label: 'Wyzdrowieli',
        data: Object.keys(recovered).map((key) => recovered[key]),
        borderColor: theme.colors.chartBorderGreen,
        backgroundColor: theme.colors.chartBgGreen,
        pointRadius: 1,
      },
      {
        label: 'Zmarli',
        data: Object.keys(deaths).map((key) => deaths[key]),
        borderColor: theme.colors.chartBorderRed,
        backgroundColor: theme.colors.chartBgRed,
        pointRadius: 1,
      },
    ],
    labels: data2.map((el) => el[0]),
  };
};

export const mapGlobalDailyData_charts = (data) => {
  const cases = data.cases;
  const recovered = data.recovered;
  const deaths = data.deaths;
  const data2 = Object.keys(cases).map((key) => [convertDate(key), cases[key]]);
  console.log(data2);
  return {
    datasets: [
      {
        label: 'Zarażeni',
        data: mapDailyResults(Object.keys(cases).map((key) => cases[key])),
        borderColor: theme.colors.chartBorderGrey,
        backgroundColor: theme.colors.chartBorderGrey,

        pointRadius: 1,
      },
      {
        label: 'Wyzdrowieli',
        data: mapDailyResults(Object.keys(recovered).map((key) => recovered[key])),
        borderColor: theme.colors.chartBorderGreen,
        backgroundColor: theme.colors.chartBorderGreen,
        pointRadius: 1,
      },
      {
        label: 'Zmarli',
        data: mapDailyResults(Object.keys(deaths).map((key) => deaths[key])),
        borderColor: theme.colors.chartBorderRed,
        backgroundColor: theme.colors.chartBorderRed,
        pointRadius: 1,
      },
    ],
    labels: data2.map((el) => el[0]),
  };
};

export const mapCountrySumData_charts = (data) => {
  const cases = data.timeline.cases;
  const recovered = data.timeline.recovered;
  const deaths = data.timeline.deaths;

  const data2 = Object.keys(cases).map((key) => [convertDate(key), cases[key]]);

  const datasets = {
    datasets: [
      {
        label: 'Zarażeni',
        data: Object.keys(cases).map((key) => cases[key]),
        borderColor: theme.colors.chartBorderGrey,
        backgroundColor: theme.colors.chartBgGrey,
        pointRadius: 1,
      },
      {
        label: 'Wyzdrowieli',
        data: Object.keys(recovered).map((key) => recovered[key]),
        borderColor: theme.colors.chartBorderGreen,
        backgroundColor: theme.colors.chartBgGreen,
        pointRadius: 1,
      },
      {
        label: 'Zmarli',
        data: Object.keys(deaths).map((key) => deaths[key]),
        borderColor: theme.colors.chartBorderRed,
        backgroundColor: theme.colors.chartBgRed,
        pointRadius: 1,
      },
    ],
    labels: data2.map((el) => el[0]),
  };

  const resultData = {
    data: [...datasets.datasets],
    labels: datasets.labels,
  };
  return resultData;
};

export const mapCountryDailyData_charts = (data) => {
  const cases = data.timeline.cases;
  const recovered = data.timeline.recovered;
  const deaths = data.timeline.deaths;

  const data2 = Object.keys(cases).map((key) => [convertDate(key), cases[key]]);

  const datasets = {
    datasets: [
      {
        label: 'Zarażeni',
        data: mapDailyResults(Object.keys(cases).map((key) => cases[key])),
        borderColor: theme.colors.chartBorderGrey,
        backgroundColor: theme.colors.chartBorderGrey,
        pointRadius: 1,
      },
      {
        label: 'Wyzdrowieli',
        data: mapDailyResults(Object.keys(recovered).map((key) => recovered[key])),
        borderColor: theme.colors.chartBorderGreen,
        backgroundColor: theme.colors.chartBorderGreen,
        pointRadius: 1,
      },
      {
        label: 'Zmarli',
        data: mapDailyResults(Object.keys(deaths).map((key) => deaths[key])),
        borderColor: theme.colors.chartBorderRed,
        backgroundColor: theme.colors.chartBorderRed,
        pointRadius: 1,
      },
    ],
    labels: data2.map((el) => el[0]),
  };

  const resultData = {
    data: [...datasets.datasets],
    labels: datasets.labels,
  };
  return resultData;
};

export const mapGlobalSumData_vacc = (data) => {
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

export const mapGlobalDailyData_vacc = (data) => {
  const data2 = Object.keys(data).map((key) => [convertDate(key), data[key]]);
  return {
    datasets: [
      {
        label: 'Total',
        data: mapDailyResults(data2.map((el) => el[1])),
        borderColor: theme.colors.chartBorderBlue,
        backgroundColor: theme.colors.chartBgBlue,
        pointRadius: 2,
      },
    ],
    labels: data2.map((el) => el[0]),
  };
};

export const mapCountrySumData_vacc = (data) => {
  const data2 = Object.keys(data.timeline).map((key) => [convertDate(key), data.timeline[key]]);
  const datasets = {
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

  const resultData = {
    data: [...datasets.datasets],
    labels: datasets.labels,
  };

  return resultData;
};

export const mapCountryDailyData_vacc = (data) => {
  const data2 = Object.keys(data.timeline).map((key) => [convertDate(key), data.timeline[key]]);
  const datasets = {
    datasets: [
      {
        label: 'Total',
        data: mapDailyResults(data2.map((el) => el[1])),
        borderColor: theme.colors.chartBorderBlue,
        backgroundColor: theme.colors.chartBgBlue,
        pointRadius: 2,
      },
    ],
    labels: data2.map((el) => el[0]),
  };

  const resultData = {
    data: [...datasets.datasets],
    labels: datasets.labels,
  };

  return resultData;
};
