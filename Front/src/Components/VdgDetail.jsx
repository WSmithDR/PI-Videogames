import { useParams } from "react-router"
import useVideogame from "../Hooks/useVideogame"
import useOrdList from './../Hooks/useOrdList';

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
            {description && <p><strong>Description: </strong>{description}</p>}
            {platforms && <details>
                <summary><strong>Platforms:</strong></summary>
                {useOrdList(platforms)}
                </details>}
            <p><strong>Released: </strong>
            {releaseDate}</p>
            <p><strong>Rating: </strong>{rating}</p>
            <img src={image} width="300px"/>
        </div>
    )
}

export default VdgDetail