import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchVideogameByName } from "../redux/actions/actions"

export const SearchVideogameByName = () => {
    const [name, setName] = useState("")

    const handleInputChange = event => {
        setName(event.target.value)
    }

    const dispatch = useDispatch()
    
    const onSearch = () => {
        dispatch(searchVideogameByName(name))
        setName("")
    }


    return (
        <div>
            <input type="search" 
            placeholder="Search by name..."
            onChange={handleInputChange}
            value ={name}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    )

}