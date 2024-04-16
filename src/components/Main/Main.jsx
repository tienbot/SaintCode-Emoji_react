import { useState, useEffect } from 'react';
import './Main.css';
import { data } from "../../data/emoji.js";
import Item from "../Item/Item";
import Pagination from '../Pagination/Pagination.js';

export default function Main() {
    const [searchItem, setSearchItem] = useState(''); // Состояние инпута
    const [currentPage, setCurrentPage] = useState(1); // Стартовая страница
    const [emojiPerPage, setEmojiPerPage] = useState(12); // Количество эмодзи на странице
    const [filteredData, setFilteredData] = useState([]); // Отфильтрованные данные

    // Фильтрация данных при изменении строки поиска или количества эмодзи на странице
    useEffect(() => {
        const filteredData = data.filter(value =>
            value.title.toLowerCase().includes(searchItem.toLowerCase()) ||
            value.keywords.toLowerCase().includes(searchItem.toLowerCase())
        );
        setFilteredData(filteredData);
        setCurrentPage(1); // При изменении фильтрованных данных сбрасываем текущую страницу на первую
    }, [searchItem, emojiPerPage]);

    // Определение индексов первого и последнего эмодзи на странице
    const lastEmojiIndex = currentPage * emojiPerPage;
    const firstEmojiIndex = lastEmojiIndex - emojiPerPage;

    // Получение текущей страницы эмодзи
    const currentEmoji = filteredData.slice(firstEmojiIndex, lastEmojiIndex);

    // Функция пагинации
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Обработчик изменения количества эмодзи на странице
    const handlePerPageChange = (perPage) => {
        setEmojiPerPage(perPage);
    };

    return (
        <>
            <input type="text" id="input" placeholder="Enter keywords..." className="header__input"
                    value={searchItem}
                    onChange={(event) => setSearchItem(event.target.value)}/>
            <main className="main">
                <div className="container">
                    <div className="grid">
                        {currentEmoji.map((el, index) =>
                            (<Item key={index} symbol={el.symbol} title={el.title} keywords={el.keywords}/>))
                        }
                    </div>
                    <Pagination
                        EmojiPerPage={emojiPerPage} 
                        totalEmoji={filteredData.length} 
                        paginate={paginate}
                        currentPage={currentPage}
                        handlePerPageChange={handlePerPageChange}
                    />
                </div>
            </main>
        </>
    );
}
