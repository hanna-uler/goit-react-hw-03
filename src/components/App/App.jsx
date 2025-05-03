import { useState, useMemo } from 'react'
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import { useDebounce } from 'use-debounce';

const initContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]
  
export default function App() {
  const [contacts, setContacts] = useState(initContacts)
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);

  const addContact = (newContact) => {
    setContacts((contacts) => {
      return [...contacts, newContact]
    })
  }

  const visibleContacts = useMemo(() => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()))
  }, [debouncedSearchQuery, contacts]);

  const deleteContact = (id) => {
    setContacts(contacts => contacts.filter((contact) => contact.id !== id))
  }


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact}/>
      <SearchBox inputValue={searchQuery} onChange={setSearchQuery} />
      <ContactList deleteContact={deleteContact} contacts={visibleContacts} />
    </div>

  )
}