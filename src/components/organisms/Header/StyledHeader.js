import styled from 'styled-components';

const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.fontSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 12px 24px -4px rgba(0, 0, 0, 0.73);
  box-shadow: 0px 12px 24px -4px rgba(0, 0, 0, 0.73);
  z-index: 2;

  & img {
    margin: 0 0.5rem;
  }
`;

export default StyledHeader;
