import axios from "axios"
import { useEffect, useState } from "react"

const useVideogame = (id) => {
    const [videogame, setVidegame] = useState({})
    useEffect(()=>{
        axios(`http://localhost:3001/videogames/${id}`)
        .then(({data})=>setVidegame({...data}))
    },[id])
    return videogame
}

export default useVideogame