import ErrorList from "../Styles/errors"

export const Errors = ({name}) => {
    return (
        <ErrorList>
            {
                name.map((error,index) => <li key={index}>{error}</li>)
            }
        </ErrorList>
    )
}
