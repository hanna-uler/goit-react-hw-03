import css from './SearchBox.module.css'
import { LuUserRoundSearch } from "react-icons/lu";

export default function SearchBox({inputValue, onChange}) {
    return (
        <div className={css.container}>
            <label htmlFor='searchInput'><LuUserRoundSearch className={css.icon} size="1.5rem"/>Find contacts by name</label>
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