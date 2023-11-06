import styled from "styled-components";

export const StyledForm = styled.form`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  label{
    font-weight:bold;
    margin-right:0.5em;
    font-size:1em;
  }
  div{
    margin-bottom:1em;
  }
  input { 
    margin-bottom:0.5em;
  }
`;

export const ListContainer = styled.ul`
  max-height: 100px;
  overflow-y: auto;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
`;

export const Name = styled.input`
  width:80%;
`

export const Description = styled.textarea`
  width:95%;
  margin-top:0.5em;
  border-radius:1em;
  overflow:vertical;
  resize:vertical;
  height:100px;
  padding:1em;
  :focus{
    border:2px #fff;
  }
`;

export const Img = styled.img`
  width:50%;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap:wrap;
  word-wrap:break-word;
`;

export const Checkbox = styled.input`
  margin-right: 0.5;
`;

export const StarRating = styled.div`
  cursor: pointer;
  display: inline-block;
  margin: 0 5px;
  color: ${props => (props.filled ? "gold" : "")};
  input {
    width:3em;
  }
`;
