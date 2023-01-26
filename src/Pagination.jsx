import React from 'react';

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="pagination justify-content-center mt-5">
        <li className="page-item ">
          <a
            className="page-link "
            onClick={prevPage}
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'black',
            //   border: '0.8px solid #6340EF',
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage == pgNumber ? 'active' : ''} `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              style={{
                cursor: 'pointer',
                textDecoration: 'none',
                color: 'white',
                backgroundColor: 'black',
                // border: '0.8px solid #6340EF',
              }}
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            onClick={nextPage}
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'white',
              backgroundColor: 'black',
            //   border: '0.8px solid #6340EF',
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
