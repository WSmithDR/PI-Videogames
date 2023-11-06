import React, { useState } from "react";
import {
  BackSide,
  CardContainer,
  CardImage,
  CardInner,
  DetailLink,
  FrontSide
} from "../Styles/videogame";

const Videogame = ({ videogame }) => {
  const {id, name, image, genres } = videogame;
  const [flipped, setFlipped] = useState(false);
  
  const handleMouseEnter = () => {
    setFlipped(true);
  };

  const handleMouseLeave = () => {
    setFlipped(false);
  };
  return (
    <DetailLink to={`/detail/${id}`}>
      <CardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardInner flipped={flipped}>
        <FrontSide>
          <CardImage src={image} alt={name} />
        </FrontSide>
          <BackSide>
            <h3>{name}</h3>
            {genres && <h4>Genres:</h4>}
            <ul>
              {genres?.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </BackSide>
      </CardInner>
    </CardContainer>
    </DetailLink>
  );
};

export default Videogame;
