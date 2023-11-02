import axios from "axios"
import { useState, useEffect } from "react"

const useGenres = () => {
  const [genres, setGenres] = useState([])
  const endpoint = `http://localhost:3001/genres`
  useEffect(() => {
    axios(endpoint)
    .then(({data})=> {
        const genreNames = data.map(genre => genre.name)
        setGenres(genreNames)
    })
  }, [])

  return genres
}

export default useGenres
