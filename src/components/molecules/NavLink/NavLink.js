import React from 'react';
import StyledNavLink from './StyledNavLink';

const NavLink = ({ toggleNavVisibility, children, selectedTab, selectTabFunction, idForLi }) => {
  const classes = selectedTab === idForLi ? 'selected' : '';
  return (
    <StyledNavLink
      id={idForLi}
      className={classes}
      onClick={(e) => {
        selectTabFunction(e.target.id);
        toggleNavVisibility();
      }}
    >
      {children}
    </StyledNavLink>
  );
};

export default NavLink;
