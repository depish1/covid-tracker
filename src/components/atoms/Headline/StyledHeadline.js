import styled from 'styled-components';

const StyledHeadline = styled.div`
  display: flex;
  justify-content: center;
  & h1 {
    margin: 1rem 0;
  }

  & h2 {
    margin: 2rem 0;
    font-size: 2rem;
  }
  & h4 {
    margin: 0.5rem 0;
  }
`;

export default StyledHeadline;
