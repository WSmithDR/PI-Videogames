import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useData from "../Hooks/useData";
import { Reset, Selection, SelectionContainer } from "../Styles/RenderingOptions";
import { renderVideogames } from "../redux/actions/actions";

const RenderingOptions = () => {
    const genres = useData("http://localhost:3001/genres")
    const dispatch = useDispatch()

    const [filter, setFilter] = useState({ genre: "all", created: "all" });
  const [order, setOrder] = useState({prop:"name", way:"A"});

  useEffect(() => {
    dispatch(renderVideogames(filter, order));
  }, [filter, order]);

    const handleFilterOption = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value });
      };
      
      const handleOrderOption = (event) => {
        const [prop, way] = event.target.value.split(" ")
        setOrder({prop, way})
      }
    const cleanOrderFilter = () => {
        setFilter({ genre: "all", created: "all" })
        setOrder({prop:"name", way:"A"})
        dispatch(renderVideogames())
    }

      useEffect(() => {
        dispatch(renderVideogames(filter, order));
      }, [filter, order]);

    return <>
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
    </>
}

export default RenderingOptions