import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useCurrentItems from '../../Hooks/useCurrentItems';
import { StyledButton } from '../../Styles/Videogames/PaginationButtons';
import { setCurrentPage } from '../../redux/actions/actions';
import Videogames from '../Videogames/Videogames';

const Pagination = ({ data, itemsPerPage }) => {
  const currentPage = useSelector(state => state.currentPage)
  const buttonsToShow = 5
  const [start, setStart] = useState(1);
  const dispatch = useDispatch();

  const currentItems = useCurrentItems(data, itemsPerPage, currentPage)


  const totalPages = Math.ceil(data.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1))
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1))
    }
  }

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(setCurrentPage(page))
    }
  }

  const nextRange = () => {
    if (start + buttonsToShow <= totalPages) {
      setStart(start + buttonsToShow);
    } else {
      setStart(totalPages - buttonsToShow + 1);
    }
  };

  const prevRange = () => {
    if (start - buttonsToShow >= 1) {
      setStart(start - buttonsToShow);
    }
  }

  useEffect(() => {
    const newStart = Math.floor((currentPage - 1) / buttonsToShow) * buttonsToShow + 1;
    setStart(newStart);
    dispatch(setCurrentPage(currentPage));
  }, [currentPage, buttonsToShow]);

  return (
    <div>
      <div>
        <Videogames videogames={currentItems}/>
      </div>
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Prev
        </button>
        {[...Array(totalPages).keys()]
          .slice(start - 1, start + buttonsToShow - 1)
          .map((index) => (
            <StyledButton
              key={index}
              onClick={() => goToPage(index + 1)}
              isActive={currentPage === index + 1}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </StyledButton>
          ))}
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
      <div>
        <button onClick={prevRange} disabled={start === 1}>
          &#171; Prev Range
        </button>
        <button
          onClick={nextRange}
          disabled={start + buttonsToShow > totalPages}
        >
          Next Range &#187;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
