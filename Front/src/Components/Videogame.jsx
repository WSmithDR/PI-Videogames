import { NavLink, useParams } from "react-router-dom"

const Videogame = ({videogame}) => {
    const {
    id,
    name,
    image,
    } = videogame
    return(
        <NavLink to={`/detail/${id}`}>
            <div>
            {name && <p><strong>Name: </strong>{name}</p>}
            <img src={image} width="300px"/>
            </div>
        </NavLink>
    )
}

export default Videogame