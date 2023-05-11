import React from 'react'
import { Card } from '../Card/Card'

export const Main = ({value, filteredData}) => {

    // console.log(value)

    return (
        <main>
            {filteredData.map(el => <Card key={el.title} {...el}/>)}
        </main>
    )
}