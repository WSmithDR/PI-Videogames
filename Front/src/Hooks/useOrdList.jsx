const useOrdList = (array) => {
    return(
        <ol>
            {
                array.map((element, index) => <li key={index}>{element}</li>)
            }
        </ol>
    )
}

export default useOrdList