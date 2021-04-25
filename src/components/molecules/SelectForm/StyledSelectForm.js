import styled from 'styled-components';

const StyledSelectForm = styled.select`
  height: 1.5rem;
  min-width: 60%;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  border: 3px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 5px;
  padding: 2px;
`;

export default StyledSelectForm;
