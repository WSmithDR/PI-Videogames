import Videogame from "./Videogame";
import { VideogameContainer, VideogameItem } from "../Styles/videogames";


const Videogames = ({videogames}) => {
  return (
      <VideogameContainer>
        {videogames &&
          videogames.map((videogame, index) => (
            <VideogameItem key={index}>
              <Videogame videogame={videogame} />
            </VideogameItem>
          ))}
      </VideogameContainer>
  );
};

export default Videogames;
