const useCurrentItems = (data, itemsPerPage, currentPage) => {
  
    const from = (currentPage - 1) * itemsPerPage
    
    const to = currentPage * itemsPerPage
    
    const currentItems = data.slice(from,to);
  
  
    return currentItems
  };
  
  export default useCurrentItems;
  