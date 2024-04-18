import s from './Input.module.css';
import React from 'react';

export function Input({ value, onChange}) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter keywords..."
            className={s.header__input}
        />
    );
}