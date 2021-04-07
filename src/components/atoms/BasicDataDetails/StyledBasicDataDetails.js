import styled from 'styled-components';

const StyledBasicDataDetails = styled.div`
  margin-top: 1rem;
  & span {
    margin-left: 0.5rem;
    font-weight: bold;
    &.cases {
      color: ${({ theme }) => theme.colors.cases};
    }
    &.recovered {
      color: ${({ theme }) => theme.colors.recovered};
    }
    &.deaths {
      color: ${({ theme }) => theme.colors.deaths};
    }
  }

  &:last-child {
    margin-bottom: 1rem;
  }
`;

export default StyledBasicDataDetails;
