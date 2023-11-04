import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardWrapper = styled.div`
  perspective: 1000px;
  position: relative;
  cursor: pointer;
  width: 150px; /* Ancho fijo */
  height: 150px; /* Alto fijo */
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'rotateY(0)')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Agregar sombra aquí */
  border-radius: 10px; /* Agregar borde redondeado aquí */
`;

export const CardFront = styled.div`
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
  margin: 0; /* Agregar margen 0 aquí */

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end; /* Cambiado de 'space-between' a 'flex-end' */
  padding: 16px;
  border-radius: 10px;
  background-color: #fff;
  transition: background-color 0.3s, color 0.3s;
  margin: 0;
  padding: 0;
  white-space: nowrap; /* Cambiado a 'nowrap' en lugar de 'wrap' */
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1em;

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
`;

export const CardText = styled.div`
  text-align: center;
  padding: 0.5em;
`;

export const CardLink = styled(NavLink)`
  text-decoration: none;
  color: #fff; /* Cambiado a color blanco para el texto */
  text-align: center;
  padding: 0.5em;
  background-color: #000; /* Fondo negro */
  border-radius: 10px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  margin: 10px 0; /* Agregada margen inferior para distancia desde la parte inferior */

  &:hover {
    background-color: #333; /* Cambiado a un tono más oscuro en hover */
  }
`;
