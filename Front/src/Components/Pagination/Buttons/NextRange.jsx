import { useDispatch } from "react-redux";
import { setStartPageRange } from "../../../redux/actions/actions";


const NextRange = ({start, buttonsToShow, totalPages}) => {
    const dispatch = useDispatch()
    const nextRange = () => {
        if (start + buttonsToShow <= totalPages) {
          dispatch(setStartPageRange(start + buttonsToShow))
        } else {
          dispatch(setStartPageRange(totalPages - buttonsToShow + 1))
        }
      };
    return(
        <button
            onClick={nextRange}
            disabled={start + buttonsToShow > totalPages}>Next Range &#187;
        </button>
    )
}

export default NextRange