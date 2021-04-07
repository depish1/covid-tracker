import React from 'react';
import StyledHeadline from './StyledHeadline';

const Headline = ({ size, children }) => {
  switch (size) {
    case '1':
      return (
        <StyledHeadline>
          <h1>{children}</h1>
        </StyledHeadline>
      );

    case '2':
      return (
        <StyledHeadline>
          <h2>{children}</h2>
        </StyledHeadline>
      );

    case '3':
      return (
        <StyledHeadline>
          <h3>{children}</h3>
        </StyledHeadline>
      );
    case '4':
      return (
        <StyledHeadline>
          <h4>{children}</h4>
        </StyledHeadline>
      );

    default:
      return <h2>{children}</h2>;
  }
};

export default Headline;
