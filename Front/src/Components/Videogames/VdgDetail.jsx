import { useParams } from "react-router";
import useVideogame from "../../Hooks/useVideogame";
import { Description, DetailContainer, Img, Title } from "../../Styles/Videogames/VdgDetail";
import Genres from "../Forms/CreateVideogame/Genres";
import Platforms from "../Forms/CreateVideogame/Platforms";


const VdgDetail = () => {
    const {id} = useParams()
    const videogame = useVideogame(id)
    const {
        name, 
        description, 
        platforms,
        releaseDate,
        rating,
        image,
        genres
        } = videogame

    return(
        <DetailContainer>
            {name && <Title>{name}</Title>}
            <Img src={image}/>
            {description && <Description>{description}</Description>}
            {genres && <>
                <p>{`${name} belongs to the genres: `}</p> 
                <Genres genres={genres}/>
            </>}
            <p>{`${name} was relased on ${releaseDate} and has reached the punctuation of ${rating} in rating and currently is available in platforms like: `}</p>
            <Platforms platforms={platforms}/>
        </DetailContainer>
    )
}

export default VdgDetail