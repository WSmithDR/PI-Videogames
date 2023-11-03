import React, { useState } from 'react';

const PaginationButtons = ({ pagination }) => {
  const { currentPage, totalPages, nextPage, prevPage, goToPage } = pagination;
  const buttonsToShow = 3
  const [start, setStart] = useState(1)

  const nextRange = () => {
    if (start + buttonsToShow <= totalPages) {
      setStart(start + buttonsToShow)
    }
  }

  const prevRange = () => {
    if (start - buttonsToShow >= 1) {
      setStart(start - buttonsToShow)
    }
  }

  return (
    <div>
        <div>
            <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
            {[...Array(totalPages).keys()].slice(start - 1, start + buttonsToShow - 1).map((index) => (
            <button
            key={index}
            onClick={() => goToPage(index + 1)}
            disabled={currentPage === index + 1}
            >
            {index + 1}
            </button>))}
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
        <div>
            <button onClick={prevRange} disabled={start === 1}>&#171; Prev Range</button>
            <button onClick={nextRange} disabled={start + buttonsToShow > totalPages}>Next Range &#187;</button>
        </div>
    </div>
  )
}

export default PaginationButtons
