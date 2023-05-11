import { useState } from 'react';
import './App.css';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

import { data } from './data/data';

function App() {
    function randomFavicon(data){
        let randomNumb = Math.floor(Math.random() * data.length) + 1
        let randomImg = data[randomNumb].symbol
        let title = document.querySelector('title')
        title.innerHTML = `Emoji ${randomImg}`
    }
    randomFavicon(data)

    const [value, setValue] = useState('');
    const searchCard = (event) => {
        setValue(event.target.value)
    }
    
    const filteredData = data.filter(el => el.title.toLocaleLowerCase().includes(value) ||
                                            el.keywords.toLocaleLowerCase().includes(value))

    return (
        <>
            <Header/>
            <Main filteredData={filteredData} searchCard={searchCard}/>
            <Footer/>
        </>
    );
}

export default App;
