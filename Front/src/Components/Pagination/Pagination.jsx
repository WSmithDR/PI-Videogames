import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCurrentItems from '../../Hooks/useCurrentItems';
import { setCurrentPage, setStartPageRange } from '../../redux/actions/actions';
import Videogames from '../Videogames/Videogames';
import PaginationButtons from './Buttons/PaginationButtons';

const Pagination = ({ data, itemsPerPage }) => {

  const currentPage = useSelector(state => state.currentPage)
  const buttonsToShow = useSelector(state => state.buttonsToShow)

  const dispatch = useDispatch();

  const currentItems = useCurrentItems(data, itemsPerPage, currentPage)
  
  const totalPages = Math.ceil(data.length / itemsPerPage);


  useEffect(() => {
    const newStart = Math.floor((currentPage - 1) / buttonsToShow) * buttonsToShow + 1;
    dispatch(setStartPageRange(newStart))
    dispatch(setCurrentPage(currentPage));
  }, [currentPage, buttonsToShow]);

  return (
    <div>
      <Videogames videogames={currentItems}/>
      <PaginationButtons currentPage={currentPage} totalPages={totalPages} buttonsToShow={buttonsToShow}/>
    </div>
  );
};

export default Pagination;
