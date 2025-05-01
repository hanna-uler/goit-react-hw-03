import css from './SearchBox.module.css'
import { useState } from 'react'

export default function SearchBox() {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (evt) => {
        setInputValue(evt.target.value);
    }
    return (
        <div>
            <label htmlFor='searchInput'>Find contacts by name</label>
            <input type='text' id='searchInput' onChange={handleChange} value={inputValue} />
        </div>
    )
    
}