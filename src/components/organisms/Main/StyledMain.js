import styled from 'styled-components';

const StyledMain = styled.main`
  grid-row: 2;
  background-color: blue;
  width: 100%;
  min-height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.backgroundComponent};
  overflow-y: scroll;
  position: relative;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: start;
  position: fixed;
  top: 50px;
  left: 0;
`;

export default StyledMain;
