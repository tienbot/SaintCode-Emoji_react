import React from 'react'
import s from './Card.module.sass';

export const Card = ({symbol, title, keywords}) => {
    function delDoubleKeywords(keyword){
        let keywordsWithDoubles = keyword.toLowerCase().split(' ')
        let keywordsWithoutDoub = []
        keywordsWithDoubles.map((el) => {
            if(!keywordsWithoutDoub.includes(el)){
                keywordsWithoutDoub.push(el)
            }
        })
        keywordsWithoutDoub = keywordsWithoutDoub.join(' ')
        return keywordsWithoutDoub
    }

  return (
    <div className={s.card}>
        
        <div className={s.emoji}>{symbol}</div>
        <h2>{title}</h2>
        <p>{delDoubleKeywords(keywords)}</p>
    </div>
  )
}
