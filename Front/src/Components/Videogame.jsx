import useOrdList from "../Hooks/useOrdList"


const Videogame = ({videogame}) => {
    const {
    id,
    name,
    description,
    platforms,
    image,
    releaseDate,
    rating 
    } = videogame
    return(
        <div>
            {name && <p><strong>Name: </strong>{name}</p>}
            {description && <p><strong>Description: </strong>{description}</p>}
            {platforms && <p><strong>Platforms: </strong>{useOrdList(platforms)}</p>}
            <p><strong>Released: </strong>{releaseDate}</p>
            <p><strong>Rating: </strong>{rating}</p>
            <img src={image} width="300px"/>
        </div>
    )
}

export default Videogame