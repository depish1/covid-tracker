import React from 'react';
import StyledBasicDataDetails from './StyledBasicDataDetails';

const BasicDataDetails = ({ type, content, children }) => {
  return (
    <StyledBasicDataDetails className={type}>
      {children} <span className={type}>{content}</span>
    </StyledBasicDataDetails>
  );
};

export default BasicDataDetails;
