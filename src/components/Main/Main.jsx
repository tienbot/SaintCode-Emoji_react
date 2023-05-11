import { useState } from 'react';
import React from 'react'
import { Card } from '../Card/Card'
import { Input } from '../Input/Input'
import s from './Main.module.sass';

export const Main = ({filteredData, value, searchCard}) => {

    return (
        <main>
            <Input value={value} inputHandler={searchCard}/>
            <section>{filteredData.map(el => <Card key={el.title} {...el}/>)}</section>
        </main>
    )
}
