import styled from 'styled-components';

const StyledHome = styled.div`
  min-height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.backgroundComponent};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export default StyledHome;
