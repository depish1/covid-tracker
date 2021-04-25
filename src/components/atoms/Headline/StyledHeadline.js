import styled from 'styled-components';

const StyledHeadline = styled.div`
  display: flex;
  justify-content: center;

  &.additionalMargin {
    margin: 0.75rem 0;
  }

  & h1 {
    font-size: 1.5rem;
  }

  & h2 {
    margin: 1rem 0;
    font-size: 2rem;
  }
  & h4 {
    margin: 0.5rem 0;
  }
`;

export default StyledHeadline;
