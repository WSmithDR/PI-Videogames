import { useDispatch } from "react-redux"
import { Numbers } from "../../../Styles/Pagination/Pagination"
import { setCurrentPage } from "../../../redux/actions/actions"


const NumberPages = ({buttonsToShow, totalPages, start, currentPage}) => {
    const dispatch = useDispatch()
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
                    <Numbers
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    isActive={currentPage === index + 1}
                    disabled={currentPage === index + 1}
                    >
                    {index + 1}
                    </Numbers>
            ))}
        </>
    )
}

export default NumberPages