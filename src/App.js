import { useState } from 'react';
import './App.css';
import { Input } from './components/Input/Input';
import { Main } from './components/Main/Main';
import { data } from './data/data';

function App() {
    const [value, setValue] = useState('');
    const searchCard = (event) => {
        setValue(event.target.value)
    }
    
    const filteredData = data.filter(el => el.title.includes(value))

    return (
        <>
            <Input value={value} inputHandler={searchCard}/>
            <Main filteredData={filteredData}/>
        </>
    );
}

export default App;
