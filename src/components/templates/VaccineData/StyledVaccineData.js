import styled from 'styled-components';

const StyledVaccineData = styled.div`
  min-height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.backgroundComponent};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default StyledVaccineData;
