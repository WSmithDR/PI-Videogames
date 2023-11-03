import styled from "styled-components";

export const StyledForm = styled.form`
  /* General styles for the form */
  margin: 20px;
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 5px;
`;

export const GenreList = styled.ul`
  /* Styles for the genre list */
  max-height: 100px;
  overflow-y: auto;
  list-style: none; /* Remove bullet points */
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Display items in a 3-column grid */
  gap: 5px; /* Reduce spacing between grid items */
`;

export const GenreListItem = styled.li`
  display: flex;
  align-items: center; /* Align items vertically */
`;

export const GenreCheckbox = styled.input`
  margin-right: 5px; /* Add some spacing between the checkbox and text */
`;

/*Style for the rating*/
export const StarRating = styled.div`
font-size: 24px;
cursor: pointer;
display: inline-block;
margin: 0 5px;
color: ${props => (props.filled ? "gold" : "gray")};
`;
