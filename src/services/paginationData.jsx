//it handles pagination of products
export const paginationData = (data, itemsPerPage, currentPage) => {
    //only data of the current page is shown
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };