import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.fontSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 12px 24px -4px rgba(0, 0, 0, 0.73);
  box-shadow: 0px 12px 24px -4px rgba(0, 0, 0, 0.73);
`;

export const StyledHeaderContainer = styled.div`
  grid-row: 1;
`;

export default StyledHeader;
