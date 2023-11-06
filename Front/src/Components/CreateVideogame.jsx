import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useData from "../Hooks/useData";
import useValidation from "../Hooks/useValidation";
import {
  Checkbox,
  Description,
  Img,
  ListContainer,
  ListItem,
  Name,
  StarRating,
  StyledForm
} from "../Styles/createVideogame";
import { createVideogame } from "../redux/actions/actions";
import { Errors } from "./Errors";

const CreateVideogame = () => {
  const genres = useData("http://localhost:3001/genres");
  const platforms = useData("http://localhost:3001/platforms");
  const [newVideogame, setNewVideogame] = useState({
    name: "",
    image: "",
    description: "",
    platforms: [],
    releaseDate: "",
    rating: 0,
    genres: []
  });

  const [formErrors, setFormErrors] = useState({k:"sentinel"})
  
  const validate = useValidation
  
  const handleInputChange = (event) => {
    setNewVideogame({
      ...newVideogame,
      [event.target.name]: event.target.value
    });

    const errors = validate({
      ...newVideogame,
      [event.target.name]: event.target.value
    })

    setFormErrors({...errors})
  };

  const changeUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        setNewVideogame((videogame) => ({
          ...videogame,
          image: `data:image/jpeg;base64,${base64String}`
        }));
        const errors = validate({
          ...newVideogame,
          image: `data:image/jpeg;base64,${base64String}`
        })
    
        setFormErrors({...errors})
      };
      reader.readAsDataURL(file);
    }
  };
  
  const toggleOption = (option, type) => {
    let options = {}
    if (newVideogame[type].includes(option)) {
      options = {...newVideogame,
      [type]: newVideogame[type].filter((selectedOption) => selectedOption !== option)}

      setNewVideogame(options);
    } else {
      options = {
        ...newVideogame,
        [type]: [...newVideogame[type], option]
      }
      setNewVideogame(options);
    }

    const errors = validate(options)

    setFormErrors({...errors})
  };

  const handleRatingChange = (rating) => {
    setNewVideogame({
      ...newVideogame,
      rating
    });

    const errors = validate({
      ...newVideogame,
      rating
    })

    setFormErrors({...errors})
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const filled = newVideogame.rating >= i ? 1 : 0;
      stars.push(
        <StarRating
          key={i}
          filled={filled}
          onClick={() => handleRatingChange(i)}
        >
          {filled === 1 ? "★" : "☆"}
        </StarRating>
      );
    }
    return stars;
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createVideogame(newVideogame));
    setNewVideogame({
      name: "",
      image: "",
      description: "",
      platforms: [],
      releaseDate: "",
      rating: 0,
      genres: []
    })
    alert("Videogame created sucessfully!")
  };

  const deleteImg = (event) =>{
    setNewVideogame({...newVideogame, image:""})
    const errors = validate({
      ...newVideogame,
      image:""
    })
    setFormErrors({...errors})
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <Name
          type="text"
          name="name"
          onChange={handleInputChange}
          value={newVideogame.name}
        />
        {formErrors.name && <Errors name={formErrors.name}/>}
      </div>
      <div>
        <label>Image:</label><br/>
        <input
          type="file"
          name="image"
          accept="image/*"
          autoComplete="off"
          onChange={changeUpload}
        />
        {newVideogame.image && <div>
          <Img
            src={newVideogame.image ? newVideogame.image : "Default image"}
            alt=""
            width="100px"
            /><br/>
            <button onClick={()=>deleteImg()}>Delete</button>
        </div>}
        {formErrors.image && <Errors name={formErrors.image}/>}
      </div>
      <div>
        <label>Description:</label>
        <div>
          <Description
            type="text"
            name="description"
            cols="30"
            onChange={handleInputChange}
            value={newVideogame.description}
          />
        </div>
      {formErrors.description && <Errors name={formErrors.description}/>}  
      </div>
      <div>
        <label>Genres:</label>
        {formErrors.genres && <Errors name={formErrors.genres}/>}
        <ListContainer>
          {genres.map((genre, index) => (
            <ListItem key={index}>
              <Checkbox
                type="checkbox"
                onChange={() => toggleOption(genre, "genres")}
                checked={newVideogame.genres.includes(genre)}
              />
              {genre}
            </ListItem>
          ))}
        </ListContainer>
      </div>
      <div>
        <label>Platforms:</label>
        {formErrors.platforms && <Errors name={formErrors.platforms}/>}
        <ListContainer>
          {platforms.map((platform, index) => (
            <ListItem key={index} className="platform-item">
              <Checkbox
                type="checkbox"
                onChange={() => toggleOption(platform, "platforms")}
                checked={newVideogame.platforms.includes(platform)}
              />
              {platform}
            </ListItem>
          ))}
        </ListContainer>
      </div>
      <div>
        <label>Release Date:</label>
        <input
          type="date"
          name="releaseDate"
          onChange={handleInputChange}
          value={newVideogame.releaseDate}
        />
        {formErrors.releaseDate && <Errors name={formErrors.releaseDate}/>}
      </div>
      <StarRating>
        <label>Rating:</label>
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          name="rating"
          onChange={(event) => handleRatingChange(parseFloat(event.target.value))}
          value={newVideogame.rating}
          />
          {renderStars()}
        {formErrors.rating && <Errors name={formErrors.rating}/>}
      </StarRating>
      {Object.keys(formErrors).length === 0 && <button type="submit">Create Videogame!</button>}
    </StyledForm>
  );
};

export default CreateVideogame;
