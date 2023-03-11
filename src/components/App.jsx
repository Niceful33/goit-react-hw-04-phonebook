import { useState, useEffect } from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Layout/Layout.Styled';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parcedContacts = JSON.parse(savedContacts);
      return parcedContacts;
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const checkContact = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    return checkContact
      ? alert('таке імя вже існує')
      : setContacts([...contacts, data]);
  };

  const hendlerFilterChange = inputSearch => {
    setFilter(inputSearch);
    filteredName();
  };

  const filteredName = () => {
    const filterName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterName;
  };

  const deleteitem = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onInput={hendlerFilterChange} />
      <ContactList
        events={contacts}
        filter={filteredName()}
        onDeleteItem={deleteitem}
      />
      <GlobalStyle />
    </Container>
  );
}
