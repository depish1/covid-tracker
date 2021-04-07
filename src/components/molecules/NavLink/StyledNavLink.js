import styled from 'styled-components';

const StyledNavLink = styled.li`
  display: block;
  padding: 1rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundComponent};
  cursor: pointer;
  font-weight: bold;

  &.selected {
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.fontSecondary};
    cursor: auto;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryColor};
    }
  }

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundHover};
  }
`;

export default StyledNavLink;
