import React from 'react';
import { ReactComponent as MenuIcon } from 'assets/icons/menu_icon.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close_icon.svg';
import StyledHamburgerButton from './StyledHamburgerButton';

const HamburgerButton = ({ isNavOpen, toggleNavVisibility }) => {
  const className = isNavOpen ? 'close-button' : '';
  return (
    <StyledHamburgerButton className={className} onClick={() => toggleNavVisibility()}>
      {isNavOpen ? <CloseIcon /> : <MenuIcon />}
    </StyledHamburgerButton>
  );
};

export default HamburgerButton;
