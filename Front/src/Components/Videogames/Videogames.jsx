import { Container } from "../../Styles/Videogames/Videogames";
import Videogame from "./Videogame/Videogame";


const Videogames = ({videogames}) => {
  return (
      <Container>
        {videogames &&
          videogames.map((videogame, index) => (
          <Videogame key={index} videogame={videogame} />
          )
        )}
      </Container>
  );
};

export default Videogames;
