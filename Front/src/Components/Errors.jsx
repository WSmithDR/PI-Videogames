
export const Errors = ({name}) => {
    return (
        <ul>
            {
                name.map((error,index) => <li key={index}>{error}</li>)
            }
        </ul>
    )
}