import React from 'react';
import StyledBasicData from './StyledBasicData';
import BasicDataHeader from 'components/atoms/BasicDataHeader/BasicDataHeader';
import BasicDataContent from 'components/molecules/BasicDataContent/BasicDataContent';

const BasicData = ({ sum, today, oneMilion, type }) => {
  return (
    <StyledBasicData>
      <BasicDataHeader type={type} />
      <BasicDataContent sum={sum} today={today} oneMilion={oneMilion} type={type} />
    </StyledBasicData>
  );
};

export default BasicData;
