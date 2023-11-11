import { setCurrentPage } from "../../../redux/actions/actions"


const NumberPages = ({buttonsToShow, totalPages, start, currentPage}) => {
    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
          dispatch(setCurrentPage(page))
        }
      }
    return(
        <>
            {[...Array(totalPages).keys()]
                .slice(start - 1, start + buttonsToShow - 1)
                .map((index) => (
                    <button
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    isActive={currentPage === index + 1}
                    disabled={currentPage === index + 1}
                    >
                    {index + 1}
                    </button>
            ))}
        </>
    )
}

export default NumberPages