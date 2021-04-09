import React from 'react';
import StyledNavLink from './StyledNavLink';
import { Link } from 'react-router-dom';

const NavLink = ({ path, toggleNavVisibility, children, selectedTab, selectTabFunction, idForLi }) => {
  const classes = selectedTab === idForLi ? 'selected' : '';
  return (
    <StyledNavLink
      onClick={(e) => {
        selectTabFunction(e.target.id);
        toggleNavVisibility();
      }}
    >
      <Link className={classes} id={idForLi} to={path}>
        {children}
      </Link>
    </StyledNavLink>
  );
};

export default NavLink;
