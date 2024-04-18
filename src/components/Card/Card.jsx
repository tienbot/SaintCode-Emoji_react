import s from './Card.module.css';
import React from 'react';

export function Card({title, symbol, keywords}) {
    return (
        <div className={s.item}>
            <p className={s.item__emoji}>{symbol}</p>
            <h1 className={s.item__title}>{title}</h1>
            <p className={s.item__keywords}>{keywords}</p>
        </div>
    );
}