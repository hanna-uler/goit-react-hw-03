import { useState } from 'react'
import ContactList from '../ContactList/ContactList'
// import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'

export default function App() {
  const [contacts, setContacts] = useState([
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ])
  
  const filterContacts = query => {
  setContacts(contacts.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase())))
  } 
  
  // const [filterWords, setFilter] = useState('');
//   const addContact = (newContact) => {
//     setContacts((contacts) => {
// return [...contacts, newContact]})
  //   }
  
  // const handleSearchQuery = query => {
  //   setFilter(query);
  // } 

//   const handleFilter = filterWords => {
//   setContacts(contacts.filter(contact => contact.name.toLowerCase().includes(filterWords.toLowerCase())))
// }

  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      <SearchBox onChange={filterContacts} />
      <ContactList contacts={contacts} />
    </div>

  )
}