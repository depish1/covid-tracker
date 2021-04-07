import styled from 'styled-components';

const StyledBasicData = styled.div`
  width: 25%;

  margin: 1rem 1rem;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.backgroundComponent};
  display: flex;
  align-items: center;
  flex-direction: column;
  -webkit-box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.73);
  box-shadow: 5px 5px 25px 5px rgba(0, 0, 0, 0.73);

  @media only screen and (max-width: 800px) {
    width: 60%;
  }
`;

export default StyledBasicData;
