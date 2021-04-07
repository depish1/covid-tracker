import React from 'react';
import Headline from 'components/atoms/Headline/Headline';
import StyledHeader, { StyledHeaderContainer } from './StyledHeader';

const Header = () => (
  <StyledHeaderContainer>
    <StyledHeader>
      <Headline size="1">Covid-19 Tracker</Headline>
    </StyledHeader>
  </StyledHeaderContainer>
);

export default Header;
