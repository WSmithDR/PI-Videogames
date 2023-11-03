import { useEffect } from "react"
import Videogame from "./Videogame"
import {useDispatch, useSelector} from "react-redux"
import { getVideogamesByDefault } from "../redux/actions/actions"

const Videogames = () =>{
    const dispatch = useDispatch()
    const videogames = useSelector(state=>state.renderedVideogames)
    useEffect(()=>{
        dispatch(getVideogamesByDefault())
    },[])
    
    return(
        <div>
            {videogames && videogames.map((videogame, index) => <Videogame key={index} videogame={videogame}/>)} 
        </div>
    )
}

export default Videogames