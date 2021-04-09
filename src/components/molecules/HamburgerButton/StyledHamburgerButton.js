import styled from 'styled-components';

const StyledHamburgerButton = styled.button`
  margin: 1rem 1rem;
  border: none;
  background: ${({ theme }) => theme.colors.headerColor};
  cursor: pointer;
  position: absolute;
  top: 0;
  right: -70px;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.fontColor};
  }

  &.close-button {
    border: 2px ridge ${({ theme }) => theme.colors.backgroundComponent};
    border-radius: 0.5rem;
  }
`;

export default StyledHamburgerButton;
