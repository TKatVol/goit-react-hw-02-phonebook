import React, { Component } from 'react';
import { FcConferenceCall, FcContacts } from "react-icons/fc";

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const shortid = require('shortid');

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const searchSameContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (searchSameContact) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => (
        { contacts: [...prevState.contacts, contact] }
      ));
    };
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  findContactByName = () => {
    const normalizesFilter = this.state.filter.toLowerCase();

    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizesFilter));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  render() {
    const visibleContacts = this.findContactByName();

    return (
      <div className='App'>

        <h1 className='title'>Phonebook <span className='titleIcon'><FcContacts style={{ verticalAlign: 'middle' }} /></span></h1>

        <ContactForm onSubmit={this.addContact} />

        <h2 className='title'>Contacts <span className='titleIcon'><FcConferenceCall style={{ verticalAlign: 'middle' }} /></span></h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contactsList={visibleContacts} onDeleteContact={this.deleteContact} />

      </div>
    );
  }
}

export default App;
