import styled from 'styled-components';

const StyledNav = styled.nav`
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.backgroundComponent};
  height: calc(100vh - 50px);
  z-index: 2;
  -webkit-box-shadow: 7px 0px 10px -3px #d3d3d3;
  box-shadow: 7px 0px 10px -3px #d3d3d3;
  transition: width 1s;

  &.hidden {
    display: none;
  }
`;

export const StyledUl = styled.ul`
  margin-top: 2rem;
`;
export default StyledNav;
