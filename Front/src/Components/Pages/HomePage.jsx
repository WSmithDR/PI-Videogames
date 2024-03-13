import { useSelector } from "react-redux";
import Pagination from "../Pagination/Pagination";
import RenderingOptions from "../Selections/RenderingOptions";

const HomePage = () => {
  const videogamesPerPage = 15
  const videogames = useSelector((state) => state.renderedVideogames);

  return (
    <>
      <RenderingOptions/>
      <Pagination data={videogames} itemsPerPage={videogamesPerPage} />
    </>
  );
};

export default HomePage;
