import css from './SearchBox.module.css'
import { useState } from 'react'

export default function SearchBox({onChange}) {
    const [inputValue, setInputValue] = useState('')
    const handleSearchChange = evt => {
        setInputValue(evt.target.value);
        onChange(inputValue);
    }
    return (
        <div>
            <label htmlFor='searchInput'>Find contacts by name</label>
            <input type='text' id='searchInput' onChange={handleSearchChange} value={inputValue} />
            <p>{inputValue}</p>
        </div>
    )
    
}