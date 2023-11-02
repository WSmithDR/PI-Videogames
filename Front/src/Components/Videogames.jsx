import { useEffect, useState } from "react"
import axios from "axios"
import Videogame from "./Videogame"

const Videogames = () =>{
    const endpoint = `http://localhost:3001/videogames`
    const [videogames, setVideogames] = useState([])
    useEffect(()=>{
        axios(endpoint)
        .then(({data})=>setVideogames([...data]))
    },[])
    
    return(
        <div>
            {videogames && videogames.map((videogame, index) => <Videogame key={index} videogame={videogame}/>)} 
        </div>
    )
}

export default Videogames