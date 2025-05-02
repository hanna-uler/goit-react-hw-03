import Contact from '../Contact/Contact';
import css from './ContactList.module.css'


export default function ContactList({ contacts, searchQuery }) {
    const displayedContacts = searchQuery.length === 0
        ? contacts
        : contacts.filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))
    return (
        <ul className={css.container}>
            {displayedContacts
                .map((contact) => {
                return <li className={css.contactItem}
                    key={contact.id}>
                    <Contact name={contact.name} number={contact.number} />
                </li>;
            })}
        </ul>
    )
}
// works:
// export default function ContactList({ contacts, searchQuery }) {
//     return (
//         <ul >
//             {contacts
//                 .filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))
//                 .map((contact) => {
//                 return <li className={css.contactItem}
//                     key={contact.id}>
//                     <Contact name={contact.name} number={contact.number} />
//                 </li>;
//             })}
//         </ul>
//     )
    
// }