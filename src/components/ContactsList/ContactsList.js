import React, { Fragment } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import ContactsItem from "./ContactItem";
import slideTransition from "../../transitions/slide.module.css";
import s from "./ContactsList.module.css";

const ContactsList = ({
  contacts,
  filteredContacts,
  filter,
  onDelete,
  children,
}) => {
  const randerContacts =
    !filter || filteredContacts.length === 0 ? contacts : filteredContacts;

  return (
    <Fragment>
      {children}

      <TransitionGroup component="ul" className={s.contactsList}>
        {randerContacts.map((contact) => (
          <CSSTransition
            key={contact.id}
            timeout={250}
            classNames={slideTransition}
            unmountOnExit
          >
            <li className={s.contactsListItem}>
              <ContactsItem
                {...contact}
                onDelete={() => onDelete(contact.id)}
              />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

ContactsList.propTypes = {
  children: PropTypes.node,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
};

export default ContactsList;
