import React from 'react';

function Pagination({ currentPage, totalResults, pageSize, onPageChange }) {
    const totalPages = Math.ceil(totalResults / pageSize);

    return (
        <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    disabled={index + 1 === currentPage}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
}

export default Pagination;
