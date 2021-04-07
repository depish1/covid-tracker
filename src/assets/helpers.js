export const convertDate = (date) => {
  const dateArr = [...date.split('/')];
  return `20${dateArr[2]}-${dateArr[0].length > 1 ? dateArr[0] : '0'.concat(dateArr[0])}-${
    dateArr[1].length > 1 ? dateArr[1] : '0'.concat(dateArr[1])
  }`;
};
