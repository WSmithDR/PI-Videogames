import { useState } from "react"
import useData from "../Hooks/useData"

export const SearchVideogameByName = () => {
    const [search, setSearch] = useState("")

    const handleInputChange = event => {
        setSearch(event.target.value)
    }

    const onSearch = (search) => {
        const data = useData(`http://localhost:3001/videogames?name=${search}`)
        
    }
    
    const handleClick = ()=> {
        onSearch(search)
    }

    return (
        <div>
            <input type="search" 
            placeholder="Search by name..."
            onChange={handleInputChange}
            value ={search}
            />
            <button onClick={handleClick}>Search</button>
        </div>
    )

}