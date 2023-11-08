import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Videogames from "../Components/Videogames";
import usePagination from "../Hooks/usePagination";
import { Reset, Selection, SelectionContainer } from "../Styles/Home";
import {
  getVideogamesByDefault,
  renderVideogames
} from "../redux/actions/actions";
import PaginationButtons from "./../Components/PaginationButtons";
import useData from "./../Hooks/useData";

const HomePage = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.renderedVideogames);
  const genres = useData("http://localhost:3001/genres");
  useEffect(() => {
    dispatch(getVideogamesByDefault());
  }, []);

  const [filter, setFilter] = useState({ genre: "all", created: "all" });
  const [order, setOrder] = useState({prop:"name", way:"A"});
  const videogamesPerPage = 15

  const [pagination, currentVideogames] = usePagination(
    videogames,
    videogamesPerPage
  );

  const handleFilterOption = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };
  
  const handleOrderOption = (event) => {
    const [prop, way] = event.target.value.split(" ")
    setOrder({prop, way})
  }

  useEffect(() => {
    dispatch(renderVideogames(filter, order));
  }, [filter, order]);

  const cleanOrderFilter = () => {
    dispatch(getVideogamesByDefault())
    setFilter({ genre: "all", created: "all" })
    setOrder({prop:"name", way:"A"})
  }

  return (
    <>
      {<SelectionContainer>
        <label>
            <b>Genres:</b>{" "}
        </label>
        <Selection name="genre" defaultValue="all" onChange={handleFilterOption} value={filter.genre}>
            <option value="all">All</option>
            {genres &&
              genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
        </Selection>{" "}
        <label>
          <b>Origin(API/DB):</b>{" "}
        </label>
        <Selection name="created" defaultValue="all" onChange={handleFilterOption} value={filter.created}>
          <option value="all">All</option>
          <option value="true">Db</option>
          <option value="false">API</option>
          </Selection>
        <label>
          <b>SORT:</b>{" "}
        </label>
        <Selection onChange={handleOrderOption}>
          <optgroup label="Name">
            <option value="name A">Ascendent</option>
            <option value="name D">Descendent</option>
          </optgroup>
          <optgroup label="Rating">
            <option value="rating A">Ascendent</option>
            <option value="rating D">Descendent</option>
          </optgroup>
        </Selection>
        <Reset onClick={cleanOrderFilter}>Reset</Reset>
      </SelectionContainer>}
      <Videogames videogames={currentVideogames} />
      <PaginationButtons pagination={pagination} />
    </>
  );
};

export default HomePage;
