import React, { useState } from "react";
import useData from "../Hooks/useData";
import {
  StyledForm,
  ListContainer,
  ListItem,
  Checkbox,
  StarRating
} from "../Styles/createVideogame";
import { useDispatch } from "react-redux";
import { createVideogame } from "../redux/actions/actions";

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

  const handleInputChange = (event) => {
    setNewVideogame({
      ...newVideogame,
      [event.target.name]: event.target.value
    });
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
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleOption = (option, type) => {
    if (newVideogame[type].includes(option)) {
      setNewVideogame({
        ...newVideogame,
        [type]: newVideogame[type].filter((selectedOption) => selectedOption !== option)
      });
    } else {
      setNewVideogame({
        ...newVideogame,
        [type]: [...newVideogame[type], option]
      });
    }
  };

  const handleRatingChange = (rating) => {
    setNewVideogame({
      ...newVideogame,
      rating
    });
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
  };

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
        <img
          src={newVideogame.image ? newVideogame.image : "Default image"}
          alt=""
          width="100px"
        />
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
        <label>Genres:</label>
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
      </div>
      <StarRating>
        <label>Rating:</label>
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          name="rating"
          onChange={(e) => handleRatingChange(parseFloat(e.target.value))}
          value={newVideogame.rating}
        />
        <div>{renderStars()}</div>
      </StarRating>
      <button type="submit">Create Videogame!</button>
    </StyledForm>
  );
};

export default CreateVideogame;
