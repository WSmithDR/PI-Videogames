import styled from "styled-components";

export const StyledButton = styled.button`
background-color: ${(props) => (props.active ? "white" : "otro-color")};
color: ${(props) => (props.active ? "black" : "otro-color-de-texto")};
float:left;
margin-right:1.5%;
`;
