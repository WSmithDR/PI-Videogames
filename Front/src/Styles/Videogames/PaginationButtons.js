import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => (props.isActive ? 'white' : 'transparent')};
  color: ${props => (props.isActive ? 'black' : 'white')};
  margin:0.5%;
  border:0.1px solid white;
`;
