import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

export default function ContactList({ contacts, deleteContact }) {
    return (
        <ul className={css.container}>
            {contacts.map((contact) => {
                return <li className={css.contactItem}
                    key={contact.id}>
                    <Contact deleteContact={deleteContact} name={contact.name} number={contact.number} id={contact.id} />
                </li>;
            })}
        </ul>
    )
}
