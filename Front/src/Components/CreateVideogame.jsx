import { useState } from "react"
import useGenres from "../Hooks/useGenres"
import {
  StyledForm,
  GenreList,
  GenreListItem,
  GenreCheckbox,
  StarRating
} from "../Styles/createVideogame"
import { useDispatch } from "react-redux"
import { createVideogame } from "../redux/actions/actions"

const CreateVideogame = () => {
  const genres = useGenres()
  const [newVideogame, setNewVideogame] = useState({
    name: "",
    image: "",
    description: "",
    platforms: [],
    releaseDate: "",
    rating: 1,
    genres: []
  })

  const [inputPlatform, setInputPlatform] = useState("")

  
  const handleInputChange = event => {
    setNewVideogame({
      ...newVideogame,
      [event.target.name]: event.target.value
    })
  }
  
  const changeUpload = async event => {
    const file = event.target.files[0]
    
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        const base64String = reader.result.split(",")[1]
        setNewVideogame(videogame => ({
          ...videogame,
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
    if (inputPlatform.trim() !== "") {
      const newPlatform = inputPlatform.trim()
      setNewVideogame({
        ...newVideogame,
        platforms: [...newVideogame.platforms, newPlatform]
      })
      setInputPlatform("")
    }
  }
  
  const removePlatform = platformToRemove => {
    const filtered = newVideogame.platforms.filter(
      platform => platform !== platformToRemove
      )
      setNewVideogame({
        ...newVideogame,
        platforms: filtered
      })
    }
    
    const toggleGenre = genre => {
      if (newVideogame.genres.includes(genre)) {
        setNewVideogame({
          ...newVideogame,
          genres: newVideogame.genres.filter(
            selectedGenre => selectedGenre !== genre
            )
          })
        } else {
          setNewVideogame({
            ...newVideogame,
            genres: [...newVideogame.genres, genre]
          })
        }
      }
      
      const handleRatingChange = rating => {
        setNewVideogame({
          ...newVideogame,
          rating
        })
      }
      
      const renderStars = () => {
        const stars = []
        for (let i = 1; i <= 5; i++) {
          const filled = newVideogame.rating >= i ? 1 : 0
          stars.push(
            <StarRating
            key={i}
            filled={filled}
            onClick={() => handleRatingChange(i)}
            >
          {filled === 1 ? "★" : "☆"}
        </StarRating>
      )
    }
    return stars
  }
  const dispatch = useDispatch()
  
  const handleSubmit = event => {
    event.preventDefault()
    dispatch(createVideogame(newVideogame))
    // setNewVideogame({
    //   name: "",
    //   image: "",
    //   description: "",
    //   platforms: [],
    //   releaseDate: "",
    //   rating: 1,
    //   genres: []
    // })
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          value={newVideogame.name}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          autoComplete="off"
          onChange={changeUpload}
        />
        <img src={newVideogame.image ? newVideogame.image : "Default image"} alt="" width="100px" />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          onChange={handleInputChange}
          value={newVideogame.description}
        />
      </div>
      <div>
        <label>Platforms:</label>
        <input
          name="platforms"
          type="text"
          value={inputPlatform}
          onChange={handleAddPlatform}
        />
        <button type="button" onClick={addPlatformToForm}>Add!</button>
        <ul>
          {newVideogame.platforms.map((platform, index) => (
            <li key={index}>{platform}{" "}
              <button type="button" onClick={() => removePlatform(platform)}>x</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <label>Release Date:</label>
        <input
          type="date"
          name="releaseDate"
          onChange={handleInputChange}
          value={newVideogame.releaseDate}
        />
      </div>
      <StarRating>
        <label>Rating:</label>
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          name="rating"
          onChange={e => handleRatingChange(parseFloat(e.target.value))}
          value={newVideogame.rating}
        />
        <div>
          {renderStars()}
        </div>
      </StarRating>
      <div>
        <label>Genres:</label>
        <GenreList>
          {genres.map((genre, index) => (
            <GenreListItem key={index}>
              <GenreCheckbox
                type="checkbox"
                onChange={() => toggleGenre(genre)}
                checked={newVideogame.genres.includes(genre)}
              />
              {genre}
            </GenreListItem>
          ))}
        </GenreList>
      </div>
      <button type="submit">Create Videogame!</button>
    </StyledForm>
  )
}

export default CreateVideogame
