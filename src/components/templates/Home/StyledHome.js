import styled from 'styled-components';

const StyledHome = styled.div`
  min-height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.backgroundComponent};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export default StyledHome;
