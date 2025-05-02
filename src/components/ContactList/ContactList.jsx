import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

export default function ContactList({ contacts }) {
    return (
        <ul className={css.container}>
            {contacts.map((contact) => {
                return <li className={css.contactItem}
                    key={contact.id}>
                    <Contact name={contact.name} number={contact.number} />
                </li>;
            })}
        </ul>
    )
}
