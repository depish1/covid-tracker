import styled from 'styled-components';

const StyledCharts = styled.div`
  min-height: calc(2 * (100vh - 50px - 3rem));
  background-color: ${({ theme }) => theme.colors.backgroundComponent};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default StyledCharts;
