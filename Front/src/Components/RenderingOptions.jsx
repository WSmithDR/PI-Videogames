import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useData from "../Hooks/useData";
import { Reset, Selection, SelectionContainer } from "../Styles/RenderingOptions";
import { renderVideogames } from "../redux/actions/actions";

const RenderingOptions = () => {
    const genres = useData("http://localhost:3001/genres")
    const dispatch = useDispatch()

    const [filter, setFilter] = useState({ genre: "all", created: "all" });
  const [order, setOrder] = useState({prop:"name", way:"None"});

  useEffect(() => {
    dispatch(renderVideogames(filter, order));
  }, [filter, order, ]);

    const handleFilterOption = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value });
      };
      
      const handleOrderOption = (event) => {
        const [prop, way] = event.target.value.split(" ")
        setOrder({prop, way})
      }
    const cleanOrderFilter = () => {
        setFilter({ genre: "all", created: "all" })
        setOrder({prop:"name", way:"None"})
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
          <b>Name:</b>{" "}
        </label>
        <Selection onChange={handleOrderOption} defaultValue="name None">
            <option value="name None">None</option>
            <option value="name A">Ascendent</option>
            <option value="name D">Descendent</option>
        </Selection>
        <label>
          <b>Rating:</b>{" "}
        </label>
        <Selection onChange={handleOrderOption} defaultValue="rating None">
            <option value="rating None">None</option>
            <option value="rating A">Ascendent</option>
            <option value="rating D">Descendent</option>
        </Selection>
        <Reset onClick={cleanOrderFilter}>Reset</Reset>
      </SelectionContainer>}
    </>
}

export default RenderingOptions