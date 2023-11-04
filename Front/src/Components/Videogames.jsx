import Videogame from "./Videogame";
import { VideogameContainer, VideogameItem } from "../Styles/videogames";


const Videogames = ({currentVideogames}) => {
  return (
      <VideogameContainer>
        {currentVideogames &&
          currentVideogames.map((videogame, index) => (
            <VideogameItem key={index}>
              <Videogame videogame={videogame} />
            </VideogameItem>
          ))}
      </VideogameContainer>
  );
};

export default Videogames;
