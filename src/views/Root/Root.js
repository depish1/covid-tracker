import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from 'components/organisms/Header/Header';
import Nav from 'components/organisms/Nav/Nav';
import GlobalStyle from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import navArr from 'assets/data/navArr';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/templates/Home/Home';
import Charts from 'components/templates/Charts/Charts';
import VaccineData from 'components/templates/VaccineData/VaccineData';

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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />

        <Nav
          toggleNavVisibility={toggleNavVisibility}
          isNavOpen={isNavOpen}
          navArr={navArr}
          selectedTab={selectedTab}
          selectTabFunction={handleLinkClick}
        />

        <Switch>
          <Route path="/charts">
            <Charts />
          </Route>
          <Route path="/vaccines">
            <VaccineData />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
