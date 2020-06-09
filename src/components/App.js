import React, { Component, Fragment } from "react";
import { CSSTransition } from "react-transition-group";

import ContactForm from "./ContactForm/ContactFormContainer";
import Filter from "./Filter/FilterContainer";
import ContactsList from "./ContactsList/ContactsListContainer";

import "../index.css";
import slideTransition from "../transitions/slide.module.css";
import popTransition from "../transitions/pop.module.css";
import s from "./App.module.css";

const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    headerAppear: false,
  };

  componentDidMount() {
    this.setState({ show: true });
  }

  render() {
    const { headerAppear } = this.state;
    const { contacts, filter } = this.props;

    const filteredContacts = filterContacts(contacts, filter);

    return (
      <Fragment>
        <CSSTransition
          in={headerAppear}
          timeout={500}
          classNames={slideTransition}
        >
          <h2 className={s.heading}>Phonebook</h2>
        </CSSTransition>

        <ContactForm />
        {contacts.length >= 1 && (
          <ContactsList filteredContacts={filteredContacts}>
            <CSSTransition
              in={contacts.length >= 2}
              timeout={250}
              classNames={popTransition}
              unmountOnExit
            >
              <Filter />
            </CSSTransition>
          </ContactsList>
        )}
      </Fragment>
    );
  }
}
