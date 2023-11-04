import { useParams } from "react-router"
import useVideogame from "../Hooks/useVideogame";
import Platforms from "./Platforms";

const VdgDetail = () => {
    const {id} = useParams()
    const videogame = useVideogame(id)
    const {
        name, 
        description, 
        platforms,
        releaseDate,
        rating,
        image
        } = videogame
        console.log(platforms)

    return(
        <div>
            {name && <p><strong>Name: </strong>{name}</p>}
            <img src={image} width="300px"/>
            {description && <p><strong>Description: </strong>{description}</p>}
            <strong>Platforms:</strong>
            <Platforms platforms={platforms}/>
            <p><strong>Released: </strong>
            {releaseDate}</p>
            <p><strong>Rating: </strong>{rating}</p>
        </div>
    )
}

export default VdgDetail