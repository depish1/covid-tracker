import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from 'components/organisms/Header/Header';

import Main from 'components/organisms/Main/Main';
import Container from './Container';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import navArr from 'assets/data/navArr';

const Root = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavOpen((prevValue) => !prevValue);
  };

  const handleLinkClick = (id) => {
    setSelectedTab(id);
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />

        <Main
          isNavOpen={isNavOpen}
          navArr={navArr}
          selectedTab={selectedTab}
          selectTabFunction={handleLinkClick}
          toggleNavVisibility={toggleNavVisibility}
        />
      </Container>
    </ThemeProvider>
  );
};

export default Root;
