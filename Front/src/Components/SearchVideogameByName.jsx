import { useState } from "react"
import { useDispatch } from "react-redux"
import { SearchBar } from "../Styles/SearchBar"
import { searchVideogameByName } from "../redux/actions/actions"

export const SearchVideogameByName = () => {
    const [name, setName] = useState("")

    const handleInputChange = event => {
        setName(event.target.value)
    }

    const dispatch = useDispatch()
    
    const onSearch = () => {
        dispatch(searchVideogameByName(name))
    }


    return (
        <SearchBar>
            <input type="search" 
            placeholder="Search by name..."
            onChange={handleInputChange}
            value ={name}
            />
            <button onClick={onSearch}>Search</button>
        </SearchBar>
    )

}