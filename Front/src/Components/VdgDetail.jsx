import { useParams } from "react-router";
import useVideogame from "../Hooks/useVideogame";
import { Description, DetailContainer, Img, Title } from "../Styles/VdgDetail";
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
        <DetailContainer>
            {name && <Title>{name}</Title>}
            <Img src={image} width="300px"/>
            {description && <Description>{description}</Description>}
            <p>{`${name} was relased on ${releaseDate} and has reached the punctuation of ${rating} in rating and currently is available in platforms like: `}</p>
            <Platforms platforms={platforms}/>
        </DetailContainer>
    )
}

export default VdgDetail