import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { SearchBar } from "../../Styles/Searching/SearchBar"
import { getVideogamesByDefault, searchVideogameByName, setCurrentPage } from "../../redux/actions/actions"

export const SearchVideogameByName = () => {
    const [name, setName] = useState("")

    const handleInputChange = event => {
        setName(event.target.value)
    }

    const dispatch = useDispatch()

    useEffect(()=>{
        setName("")
    },[getVideogamesByDefault])
    
    const onSearch = () => {
        dispatch(searchVideogameByName(name))
        dispatch(setCurrentPage(1))
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