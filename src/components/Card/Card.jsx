import React from 'react'
import s from './Card.module.scss';

export const Card = ({symbol, title, keywords}) => {
  return (
    <div className={s.card}>
        
        <p>{symbol}</p>
        <p>{title}</p>
        <p>{keywords}</p>
    </div>
  )
}
