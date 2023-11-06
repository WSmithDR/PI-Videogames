import { VideogameContainer, VideogameItem } from "../Styles/videogames";
import Videogame from "./Videogame";


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
