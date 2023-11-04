import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 20px;
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 5px;
`;

export const ListContainer = styled.ul`
  max-height: 100px;
  overflow-y: auto;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  margin-right: 5px;
`;

export const StarRating = styled.div`
  font-size: 24px;
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
  color: ${props => (props.filled ? "gold" : "gray")};
`;
