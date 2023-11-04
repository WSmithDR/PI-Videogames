import { useDispatch, useSelector } from "react-redux";
import Videogames from "../Components/Videogames"
import { getVideogamesByDefault } from "../redux/actions/actions";
import { useEffect } from "react";
import usePagination from "../Hooks/usePagination";
import PaginationButtons from './../Components/PaginationButtons';


const HomePage = ()=>{
    const dispatch = useDispatch();
    const videogames = useSelector((state) => state.renderedVideogames);
    const currentPage = useSelector((state) => state.currentPage);

  useEffect(() => {
    dispatch(getVideogamesByDefault());
  }, []);

  const [pagination, currentVideogames] = usePagination(videogames, 15, currentPage);
    return (
        <div>
            <Videogames currentVideogames={currentVideogames}/>
            <PaginationButtons pagination={pagination} />
        </div>
    )
}

export default HomePage