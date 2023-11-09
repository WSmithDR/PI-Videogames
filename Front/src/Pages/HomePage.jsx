import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Components/Pagination";
import RenderingOptions from "../Components/RenderingOptions";
import {
  getVideogamesByDefault
} from "../redux/actions/actions";

const HomePage = () => {
  const videogamesPerPage = 15
  const dispatch = useDispatch();
  const videogames = useSelector((state) => state.renderedVideogames);
  useEffect(() => {
    dispatch(getVideogamesByDefault());
  }, []);
  return (
    <>
      <RenderingOptions/>
      <Pagination data={videogames} itemsPerPage={videogamesPerPage} />
    </>
  );
};

export default HomePage;
