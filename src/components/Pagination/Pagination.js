import React from 'react';
import './Pagination.css';

export const Pagination = ({ EmojiPerPage, totalEmoji, paginate, currentPage, handlePerPageChange }) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalEmoji / EmojiPerPage);

    // Определяем, какие кнопки-страницы будут ображаться
    let startPage, endPage;
    if (totalPages <= 5) {
        startPage = 1;
        endPage = totalPages;
    } else if (currentPage <= 2) {
        startPage = 1;
        endPage = 5;
    } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 4;
        endPage = totalPages;
    } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
    }

    // Формируем массив страниц для отображения
    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    //предотвращаем перезагрузку страницы при переходе по ссылке
    const handleClick = (event, number) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
        paginate(number); // Вызываем функцию пагинации
    };

    return (
        <div className="pagination-wrapper">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <a href="#!" className="page-link" onClick={(event) => handleClick(event, 1)}>First</a>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <a href="#!" className="page-link" onClick={(event) => handleClick(event, number)}>{number}</a>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <a href="#!" className="page-link" onClick={(event) => handleClick(event, totalPages)}>Last</a>
                </li>
            </ul>
            <div className="pagination-controls">
                <p className="pagination-controls-descr">Per page</p>
                <select className="emoji-per-page-select" onChange={(event) => handlePerPageChange(event.target.value)} defaultValue={EmojiPerPage}>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="42">42</option>
                    <option value="100">100</option>
                </select>
            </div>
        </div>
    );
};
