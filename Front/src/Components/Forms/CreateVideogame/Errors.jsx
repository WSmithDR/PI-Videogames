import ErrorList from "../../../Styles/Forms/CreateVideogame/Errors"

export const Errors = ({name}) => {
    return (
        <ErrorList>
            {
                name.map((error,index) => <li key={index}>{error}</li>)
            }
        </ErrorList>
    )
}
