import React, { useState, useEffect } from 'react';
import s from './Main.module.css';
import { data } from "../../data/emoji.js";
import {Card} from "../Card/Card.jsx";
import {Input} from '../Input/Input.jsx';

export function Main() {
    const [searchItem, setSearchItem] = useState(''); // Состояние инпута (что написано в инпуте при загрузке стр.)
    const [currentPage, setCurrentPage] = useState(''); // Стартовая страница
    const [emojiPerPage, setEmojiPerPage] = useState(12); // Количество эмодзи на странице
    const [filteredData, setFilteredData] = useState([]); // Отфильтрованные данные

    // Фильтрация данных при изменении строки поиска
    useEffect(() => {
        const filteredData = data.filter(value =>
            value.title.toLowerCase().includes(searchItem.toLowerCase().trim()) ||
            value.keywords.toLowerCase().includes(searchItem.toLowerCase().trim())
        );
        setFilteredData(filteredData);
        setCurrentPage(1); // При изменении фильтрованных данных сбрасываем текущую страницу на первую
    }, [searchItem, emojiPerPage]);

    // Определение индексов первого и последнего эмодзи на странице
    const lastEmojiIndex = currentPage * emojiPerPage; //последний эмодзи на странице
    const firstEmojiIndex = lastEmojiIndex - emojiPerPage; //первый эмодзи на странице

    // Получение текущей страницы эмодзи
    const currentEmoji = filteredData.slice(firstEmojiIndex, lastEmojiIndex);

    return (
        <>
            <Input
                value={searchItem}
                onChange={(event) => setSearchItem(event.target.value)}
            />
            <main className={s.main}>
                <div className="container">
                    <div className={s.grid}>
                        {currentEmoji.map((el, index) =>
                            (<Card key={index} symbol={el.symbol} title={el.title} keywords={el.keywords}/>))
                        }
                    </div>
                </div>
            </main>
        </>
    );
}
