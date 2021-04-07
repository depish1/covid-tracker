import styled from 'styled-components';

const StyledSelectForm = styled.select`
  display: block;
  margin: 0 auto;
  border: 3px solid ${({ theme }) => theme.colors.font};
  border-radius: 5px;
  padding: 2px;
`;

export default StyledSelectForm;
