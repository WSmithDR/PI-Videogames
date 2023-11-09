import { useSelector } from "react-redux";
import Pagination from "../Components/Pagination";
import RenderingOptions from "../Components/RenderingOptions";

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
