

const Videogame = (videogame) => {
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
        <div key={id}>
            <p><strong>Name: </strong>{name}</p>
            <p><strong>Description: </strong>{description}</p>
            <p><strong>Platforms: </strong></p>
            <p><strong>Released: </strong>{releaseDate}</p>
            <p><strong>Rating: </strong>{rating}</p>
            <img src={image} width="300px"/>
        </div>
    )
}

export default Videogame