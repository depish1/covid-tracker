import styled from 'styled-components';

const StyledHamburgerButton = styled.button`
  margin: 0.5rem 1rem;
  border: none;
  background: transparent;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export default StyledHamburgerButton;
