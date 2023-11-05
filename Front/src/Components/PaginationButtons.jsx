import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/actions/actions';
import { StyledButton } from './../Styles/PaginationButtons';

const PaginationButtons = ({ pagination }) => {
  const { currentPage, totalPages, nextPage, prevPage, goToPage } = pagination;
  const buttonsToShow = 5;
  const [start, setStart] = useState(1);
  const dispatch = useDispatch();

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
  };

  useEffect(() => {
    const newStart = Math.floor((currentPage - 1) / buttonsToShow) * buttonsToShow + 1;
    setStart(newStart);
    dispatch(setCurrentPage(currentPage));
  }, [currentPage, buttonsToShow]);

  return (
    <div>
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

export default PaginationButtons;
