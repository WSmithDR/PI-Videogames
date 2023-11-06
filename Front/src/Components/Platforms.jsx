import { StyledPlatforms } from "../Styles/Platforms"

const Platforms = ({platforms}) => {
    return(
        <StyledPlatforms>
            {
                platforms?.map((element, index) => {
                    return <li key={index}>{element.platform.name}</li>
            }
            )}
        </StyledPlatforms>
    )
}

export default Platforms