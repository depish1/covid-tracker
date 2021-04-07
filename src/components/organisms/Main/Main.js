import React from 'react';
import StyledMain, { NavWrapper } from './StyledMain';
import Home from 'components/templates/Home/Home';
import Charts from 'components/templates/Charts/Charts';
import VaccineData from 'components/templates/VaccineData/VaccineData';
import HamburgerButton from 'components/molecules/HamburgerButton/HamburgerButton';
import Nav from 'components/organisms/Nav/Nav';

const Main = ({ selectTabFunction, navArr, isNavOpen, toggleNavVisibility, selectedTab }) => {
  const renderMainContent = (tab) => {
    switch (tab) {
      case 'home':
        return <Home />;
      case 'charts':
        return <Charts />;
      case 'vaccine':
        return <VaccineData />;
      default:
        return <p>Render error</p>;
    }
  };
  return (
    <StyledMain>
      {renderMainContent(selectedTab)}
      <NavWrapper>
        <Nav
          toggleNavVisibility={toggleNavVisibility}
          isNavOpen={isNavOpen}
          navArr={navArr}
          selectedTab={selectedTab}
          selectTabFunction={selectTabFunction}
        />
        <HamburgerButton toggleNavVisibility={toggleNavVisibility} isNavOpen={isNavOpen} />
      </NavWrapper>
    </StyledMain>
  );
};

export default Main;
