import styled from 'styled-components';

const StyledBasicDataHeader = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: white;

  &.cases {
    background-color: ${({ theme }) => theme.colors.cases};
  }
  &.recovered {
    background-color: ${({ theme }) => theme.colors.recovered};
  }
  &.deaths {
    background-color: ${({ theme }) => theme.colors.deaths};
  }
`;

export default StyledBasicDataHeader;
