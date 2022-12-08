import styles from "../components/Pagination.module.css";

function usePaginate(
  users,
  itemsPerPage,
  maxPageNumberLimit,
  minPageNumberLimit,
  currentPage,
  pageNumberLimit,
  setCurrentPage,
  setMaxPageNumberLimit,
  setMinPageNumberLimit
) {
  const pageClickHandler = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(users.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={pageClickHandler}
          className={currentPage === number ? `${styles.activePagination}` : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  // Get current posts
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const nextPageClickHandler = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const prevPageClickHandler = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={nextPageClickHandler}>&hellip;</li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={prevPageClickHandler}>&hellip;</li>;
  }

  return {
    renderPageNumbers,
    currentItems,
    pageIncrementBtn,
    pageDecrementBtn,
    nextPageClickHandler,
    prevPageClickHandler,
    pageNumbers,
  };
}

export default usePaginate;
