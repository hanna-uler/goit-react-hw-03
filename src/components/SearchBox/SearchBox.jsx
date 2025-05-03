import css from './SearchBox.module.css'

export default function SearchBox({inputValue, onChange}) {
    return (
        <div>
            <label htmlFor='searchInput'>Find contacts by name</label>
            <input
                className={css.input}
                type='text'
                id='searchInput'
                value={inputValue}
                onChange={(evt)=> onChange(evt.target.value)}
            />
        </div>
    )
    
}