import React from 'react'
import s from './Input.module.sass'

export const Input = ({value, inputHandler}) => {
    
    return (
    <div className={s.input__wrapper}>
        <input value={value} onChange={inputHandler} type="text" placeholder="Placeholder"/>
    </div>
    )
}
