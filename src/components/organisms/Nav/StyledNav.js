import styled from 'styled-components';

const StyledNav = styled.nav`
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.navBg};
  height: 100vh;
  transition: left 0.8s;
  position: fixed;
  top: 0;
  left: 0;

  &.hidden {
    left: -200px;
  }
`;

export const StyledUl = styled.ul`
  margin-top: 1rem;
`;

export default StyledNav;
