import React from 'react'
import s from './Input.module.scss'

export const Input = ({value, inputHandler}) => {
  return (
    <input className={s.card} value={value} onChange={inputHandler} type="text"/>
  )
}
