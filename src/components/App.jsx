import React from 'react';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './Layout/Layout.Styled';
class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const savedContact = localStorage.getItem('contacts');
    if (savedContact !== null) {
      const parsedContacts = JSON.parse(savedContact);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [] });
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  formSubmitHandler = data => {
    const checkContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    return checkContact
      ? alert('таке імя вже існує')
      : this.setState({ contacts: [...this.state.contacts, data] });
  };

  hendlerFilterChange = inputSearch => {
    this.setState({ filter: inputSearch });

    this.filteredName();
  };
  filteredName = () => {
    const { contacts, filter } = this.state;
    // console.log(contacts);
    const filterName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterName;
  };
  deleteitem = id => {
    console.log(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onInput={this.hendlerFilterChange} />
        <ContactList
          events={this.state.contacts}
          filter={this.filteredName()}
          onDeleteItem={this.deleteitem}
        />
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
