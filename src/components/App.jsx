import React from "react";
import styled from 'styled-components';
import { nanoid }  from "nanoid";

import { ContactForm } from "../components/ContactForm";
import { Filter } from "../components/Filter";
import { ContactList } from "../components/ContactList";

const StyledContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 10px;
  background-color: #e9eff5;
`;

const StyledTitleH1 = styled.h1`
  margin: 0;
  padding: 10px;
`;

const StyledTitleH2 = styled.h2`
  margin: 0;
  padding: 10px;
`;

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  
  handleSubmit = ({ name, number }, { resetForm }) => {
    
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findSameName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (findSameName) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact]
      }));
      resetForm();
    };
  };

  changeFilter = event => {
    this.setState({
      filter: event.target.value
    })
  };

  searchByName = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
  
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };
  
    render() {
      const { filter } = this.state;

      const visibleContacts = this.searchByName();
   
      return (
        <StyledContainer>
          <StyledTitleH1>Phonebook</StyledTitleH1>
          <ContactForm onSubmit={this.handleSubmit} />
        
          <StyledTitleH2>Contacts</StyledTitleH2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
        </StyledContainer>
      )
    };
};
