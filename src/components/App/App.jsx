import { useState } from 'react'
import css from './App.css'

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>

  )
}