import styled from 'styled-components';

const StyledChartBox = styled.div`
  padding: 1rem;
  -webkit-box-shadow: 5px 5px 30px -5px #000000;
  box-shadow: 5px 5px 30px -5px #000000;
  border-radius: 5px;
  margin: 1rem 0;
  width: 66vw;
  height: 66vh;
  max-height: 70vh;
  position: relative;

  @media only screen and (max-width: 800px) {
    width: 80vw;
  }

  @media only screen and (max-width: 600px) {
    width: 88vw;
  }
`;

export default StyledChartBox;
