import { useState } from "react"
import useGenres from "../Hooks/useGenres"

const Form = () => {
    const genres = useGenres()
    const [form, setForm] = useState({
        name:"",
        image:"",
        description:"",
        platforms:[],
        releaseDate:"",
        rating:1,
        genres:[]
    })

    const [inputPlatform, setInputPlatform] = useState("")
    const handleInputChange = event => {
        setForm({...form, 
            [event.target.name]:event.target.value
        })
    }

    const changeUpload = async(event) => {
        const file = event.target.files[0]

        if(file){
            const reader = new FileReader()
            reader.onload = () => {
                const base64String = reader.result.split(",")[1]
                setForm(form => ({
                    ...form, 
                    image: `data:image/jpeg;base64,${base64String}`
                }))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleAddPlatform = event => {
        setInputPlatform(event.target.value)
    }

    const addPlatformToForm = () => {
        if(inputPlatform.trim() !== ""){
            const newPlatform = inputPlatform.trim()
            setForm({...form, platforms:[...form.platforms, newPlatform]})
            setInputPlatform("")
        }
    }

    const removePlatform = (platformToRemove) => {
        const filtered = form.platforms.filter(
            platform => platform !== platformToRemove
        )
        setForm({...form, platforms:filtered})
    }
    return(
        <form>
            <div>
                <label>Name:</label>
                <input type="text" name="name" onChange={handleInputChange} value={form.name}/>
            </div>
            <div>
                <label>Image:</label>
                <input type="file" name="image" accept="image/*" autoComplete="off" onChange={changeUpload} value={form.image}/>
                <img src={form.image? form.image : "Default image"} alt="" width="100px"/>
            </div>
            <div>
                <label>Description:</label>
                <textarea type="text" name="description" onChange={handleInputChange} value={form.description}/>
            </div>
            <div>
                <label>Platforms:</label>
                <input name="platforms" type="text" value={inputPlatform} onChange={handleAddPlatform}/>
                <button type="button" onClick={addPlatformToForm}>Add!</button>
                <ul>
                    {form.platforms.map((platform, index)=> (
                    <li key={index}>{platform}{" "}
                    <button type="button" onClick={()=> removePlatform(platform)}>x</button>
                    </li>
                    ))}
                </ul>
            </div>
            <div>
                <label>Release Date:</label>
                <input type="date" name="releaseDate" onChange={handleInputChange} value={form.releaseDate}/>
            </div>
            <div>
                <label>Rating:</label>
                <input type="number" name="rating" onChange={handleInputChange} value={form.rating}/>
            </div>
            <div>
                <label>Genres:</label>
                {genres.map((genre, index)=> (
                    <div key={index}>
                        <input multiple
                        name="genres" 
                        type="checkbox" 
                        value={genre}
                        onChange={handleInputChange}
                        checked={form.genres.includes(genre)}/>
                        {genre}
                    </div>
                ))}
            </div>
            <button type="submit">Create videogame!</button>
        </form>
    )
}

export default Form