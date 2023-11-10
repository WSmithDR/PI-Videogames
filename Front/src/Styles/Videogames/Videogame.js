import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled.div`
  perspective: 1000px;
  position: relative;
  cursor: pointer;
  width: 150px;
  height: 150px;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const FrontSide = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: absolute;
  backface-visibility: hidden;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #fff;
  border-radius: 10px;
  transition: background-color 0.3s, color 0.3s;
  margin: 0;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const BackSide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 10px;
  background-color: transparent;
  transition: background-color 1s, color 0.3s;
  margin: 0;
  padding: 0;
  font-size: 1em;
  text-align: center;
  overflow: hidden;
  white-space: normal;
  max-width: 100%;
  line-height: 1.5;

  h3, h4 {
    font-size: 1em;
    margin: 0.5em 0;
    word-wrap: break-word;
  }

  ul {
    list-style-type:"★" ;
    padding: 0; 
    text-align: center;
  }

  ul {
    font-size: 0.9em;
    margin: 0.2em 0;
    padding-left: 1em;
    word-wrap: break-word;
    text-transform: capitalize;
  }

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  max-width: 100%;
`;

export const DetailLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`