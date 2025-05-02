import css from './SearchBox.module.css'

export default function SearchBox({inputValue, onChange}) {
    const handleQueryChange = evt => {
        onChange(evt.target.value);
    }
    return (
        <div>
            <label htmlFor='searchInput'>Find contacts by name</label>
            <input
                type='text'
                id='searchInput'
                onChange={handleQueryChange}
                value={inputValue}
            />
        </div>
    )
    
}