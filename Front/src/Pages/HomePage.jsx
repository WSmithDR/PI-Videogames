import { useDispatch, useSelector } from "react-redux";
import Videogames from "../Components/Videogames";
import {
  getVideogamesByDefault,
  renderVideogames,
} from "../redux/actions/actions";
import { useEffect, useState } from "react";
import usePagination from "../Hooks/usePagination";
import PaginationButtons from "./../Components/PaginationButtons";
import useData from "./../Hooks/useData";

const HomePage = () => {
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.renderedVideogames);
  const currentPage = useSelector((state) => state.currentPage);
  const genres = useData("http://localhost:3001/genres");
  useEffect(() => {
    dispatch(getVideogamesByDefault());
  }, []);

  const [filter, setFilter] = useState({ genre: "all", created: "all" });
  const [order, setOrder] = useState({prop:"name", way:"A"});

  const [pagination, currentVideogames] = usePagination(
    videogames,
    15,
    currentPage
  );

  const handleFilterOption = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };
  
  const handleOrderOption = (event) => {
    const params = event.target.value.split(" ")
    const [prop, way] = params
    setOrder({prop, way})
    console.log("***",prop, way)
  }

  useEffect(() => {
    dispatch(renderVideogames(filter, order));
  }, [filter, order]);

  return (
    <div>
      <div>
        <label>
          <b>Genres:</b>{" "}
        </label>
        <select name="genre" defaultValue="all" onChange={handleFilterOption}>
          <option value="all">All</option>
          {genres &&
            genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
        </select>
        <label>
          <b>Origin(API/DB):</b>{" "}
        </label>
        <select name="created" defaultValue="all" onChange={handleFilterOption}>
          <option value="all">All</option>
          <option value="true">Db</option>
          <option value="false">API</option>
        </select>
      </div>

      <div>
        <label>
          <b>SORT:</b>{" "}
        </label>
        <select onChange={handleOrderOption}>
          <optgroup label="Name">
            <option value="name A">Ascendent</option>
            <option value="name D">Descendent</option>
          </optgroup>
          <optgroup label="Rating">
            <option value="rating A">Ascendent</option>
            <option value="rating D">Descendent</option>
          </optgroup>
        </select>
      </div>

      <Videogames videogames={currentVideogames} />
      <PaginationButtons pagination={pagination} />
    </div>
  );
};

export default HomePage;
