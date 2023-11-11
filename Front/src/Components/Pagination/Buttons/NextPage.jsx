



const NextPage = ({currentPage, totalPages}) => {
    
    const nextPage = () => {
        if (currentPage < totalPages) {
          dispatch(setCurrentPage(currentPage + 1))
        }
      }
    
    return (
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
    )
}

export default NextPage