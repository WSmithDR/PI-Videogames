const Platforms = ({platforms}) => {
    return(
        <ol>
            {
                platforms?.map((element, index) => {
                    return <li key={index}>{element.platform.name}</li>
            }
            )}
        </ol>
    )
}

export default Platforms