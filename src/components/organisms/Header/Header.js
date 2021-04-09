import React from 'react';
import Headline from 'components/atoms/Headline/Headline';
import StyledHeader from './StyledHeader';
import coronaImg from 'assets/corona32img.png';

const Header = () => (
  <StyledHeader>
    <img src={coronaImg} alt="Virus" />
    <Headline size="1">Covid-19 Tracker</Headline>
  </StyledHeader>
);

export default Header;
