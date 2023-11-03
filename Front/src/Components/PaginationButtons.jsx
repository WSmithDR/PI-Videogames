import React from 'react';

const PaginationButtons = ({ pagination }) => {
  const { currentPage, totalPages, nextPage, prevPage, goToPage } = pagination;

  return (
    <div>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>
      {[...Array(totalPages).keys()].map((index) => (
        <button
          key={index}
          onClick={() => goToPage(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
