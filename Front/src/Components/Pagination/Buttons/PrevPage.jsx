import { useDispatch } from "react-redux"
import { setCurrentPage } from "../../../redux/actions/actions"


const PrevPage = ({currentPage}) => {
    const dispatch = useDispatch()
    const prevPage = () => {
        if (currentPage > 1) {
          dispatch(setCurrentPage(currentPage - 1))
        }
    }

    return(
        <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
    )
}

export default PrevPage