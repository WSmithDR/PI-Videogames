import { StyledGenres } from "../../../Styles/Forms/CreateVideogame/Genres"


const Genres = ({genres}) => {
    return(
        <StyledGenres>
            {
                genres?.map((element, index) => {
                    return <li key={index}>{element.name}</li>
            }
            )}
        </StyledGenres>
    )
}

export default Genres