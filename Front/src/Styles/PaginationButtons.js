import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => (props.isActive ? 'white' : 'transparent')};
  color: ${props => (props.isActive ? 'black' : 'white')};
`;
