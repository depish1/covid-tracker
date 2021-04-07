import React from 'react';
import StyledNav, { StyledUl } from './StyledNav';
import NavLink from 'components/molecules/NavLink/NavLink';

const Nav = ({ toggleNavVisibility, isNavOpen, navArr, selectedTab, selectTabFunction }) => {
  return (
    <StyledNav className={!isNavOpen ? 'hidden' : null}>
      <StyledUl>
        {navArr.map((el, i) => (
          <NavLink
            toggleNavVisibility={toggleNavVisibility}
            isNavOpen={isNavOpen}
            selectedTab={selectedTab}
            idForLi={el.id}
            selectTabFunction={selectTabFunction}
            key={i}
          >
            {el.text}
          </NavLink>
        ))}
      </StyledUl>
    </StyledNav>
  );
};

export default Nav;
