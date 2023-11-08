import { useState } from 'react';
import { useSelector } from 'react-redux';

const usePagination = (data, itemsPerPage) => {
  const currentPageFromGS = useSelector(state => state.currentPage)
  
  const [currentPage, setCurrentPage] = useState(currentPageFromGS);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentItems = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return [
    {
      currentPage,
      nextPage,
      prevPage,
      goToPage,
      totalPages,
    },
    currentItems
  ]
};

export default usePagination;
