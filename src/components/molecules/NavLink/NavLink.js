import React from 'react';
import StyledNavLink from './StyledNavLink';

const NavLink = ({ path, toggleNavVisibility, children, selectedTab, selectTabFunction, idForLi }) => {
  const classes = selectedTab === idForLi ? 'selected' : '';
  return (
    <StyledNavLink
      className={classes}
      id={idForLi}
      to={path}
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
