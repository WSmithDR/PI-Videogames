import { useSelector } from "react-redux"
import NextPage from "./NextPage"
import NextRange from "./NextRange"
import NumberPages from "./NumberPages"
import PrevPage from "./PrevPage"
import PrevRange from "./PrevRange"


const PaginationButtons = ({currentPage, totalPages, buttonsToShow}) => {

    const start = useSelector(state => state.startPageRange)
    
    return (
        <div>
            <PrevRange start={start} buttonsToShow={buttonsToShow}/>
            <PrevPage currentPage={currentPage}/>
            <NumberPages buttonsToShow={buttonsToShow} totalPages={totalPages} start={start} currentPage={currentPage}/>
            <NextPage currentPage={currentPage} totalPages={totalPages}/>
            <NextRange start={start} buttonsToShow={buttonsToShow} totalPages={totalPages}/>
        </div>
    )
}

export default PaginationButtons