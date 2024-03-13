import { useDispatch } from "react-redux"
import { setCurrentPage } from "../../../redux/actions/actions"




const NextPage = ({currentPage, totalPages}) => {
    const dispatch = useDispatch()
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