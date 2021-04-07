import React from 'react';
import StyledBasicDataHeader from './StyledBasicDataHeader';

const BasicDataHeader = ({ type }) => {
  const text = (type) => {
    switch (type) {
      case 'cases':
        return 'Zarażeni';
      case 'recovered':
        return 'Wyzdrowieli';
      case 'deaths':
        return 'Zmarli';
      default:
        return null;
    }
  };
  return (
    <StyledBasicDataHeader className={type}>
      <h3>{text(type)}</h3>
    </StyledBasicDataHeader>
  );
};

export default BasicDataHeader;
