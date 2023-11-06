import { useParams } from "react-router";
import useVideogame from "../Hooks/useVideogame";
import { Description, Img, Title } from "../Styles/VdgDetail";
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
            {name && <Title>{name}</Title>}
            <Img src={image} width="300px"/>
            {description && <Description>{description}</Description>}
            <p>{`${name} is available in the platforms: `}</p>
            <Platforms platforms={platforms}/>
            <p><strong>Released: </strong>
            {releaseDate}</p>
            <p><strong>Rating: </strong>{rating}</p>
        </div>
    )
}

export default VdgDetail