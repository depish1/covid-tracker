import styled from 'styled-components';

const StyledNavLink = styled.li`
  & a {
    text-decoration: none;
    text-align: center;
    margin-left: 1rem;
    margin-bottom: 0.5rem;
    display: block;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border: 2px ridge ${({ theme }) => theme.colors.backgroundComponent};
    border-right: none;
    cursor: pointer;
    font-weight: bold;
    border-radius: 1.5rem 0 0 1.5rem;
    color: ${({ theme }) => theme.colors.fontSecondary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.navHover};
    }

    &.selected {
      background-color: ${({ theme }) => theme.colors.backgroundComponent};
      border: 2px ridge ${({ theme }) => theme.colors.primaryColor};
      border-right: none;
      color: ${({ theme }) => theme.colors.fontPrimary};
      cursor: auto;

      &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundComponent};
      }
    }
  }
`;

export default StyledNavLink;
