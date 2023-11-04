import React, { useState } from 'react';
import {
  CardWrapper,
  CardInner,
  CardFront,
  CardBack,
  CardImage,
  CardText,
  CardLink,
} from "./../Styles/videogame"

const Videogame = ({ videogame }) => {
  const { id, name, image, genres } = videogame;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <CardWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardInner flipped={isHovered}>
        <CardFront>
          <CardImage src={image} alt={name} />
        </CardFront>
        <CardBack>
          <CardText>
            {name && (
              <>
                <b>{name}</b>
              </>
            )}
            {genres && (
              <ul>
                {genres.map((genre, index) => (
                  <li key={index}>{genre.name}</li>
                ))}
              </ul>
            )}
          </CardText>
          <CardLink to={`/detail/${id}`}>Details</CardLink> {/* Agregar botón de Details */}
        </CardBack>
      </CardInner>
    </CardWrapper>
  );
};

export default Videogame;
