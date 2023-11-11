import { useDispatch } from "react-redux";
import { setStartPageRange } from "../../../redux/actions/actions";


const PrevRange = ({start, buttonsToShow}) => {
    const dispatch = useDispatch()
    const prevRange = () => {
        if (start - buttonsToShow >= 1) {
          dispatch(setStartPageRange(start - buttonsToShow))
        }
      }
    return(
        <button onClick={prevRange} disabled={start === 1}>&#171; Prev Range</button>
    )
}

export default PrevRange