import { useEffect } from "react"
import Videogame from "./Videogame"
import {useDispatch, useSelector} from "react-redux"
import { getVideogamesByDefault } from "../redux/actions/actions"
import usePagination from "../Hooks/usePagination"
import PaginationButtons from "./PaginationButtons"

const Videogames = () =>{
    const dispatch = useDispatch()
    const videogames = useSelector(state=>state.renderedVideogames)
    const currentPage = useSelector(state => state.currentPage)
    useEffect(()=>{
        dispatch(getVideogamesByDefault())
    },[])
    const [pagination, currentVideogames] = usePagination(videogames, 15, currentPage)
    return(
        <div>
            {currentVideogames && currentVideogames.map((videogame, index) => (
                <Videogame key={index} videogame={videogame}/>))}
            <PaginationButtons pagination={pagination}/> 
        </div>
    )
}

export default Videogames