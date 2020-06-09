import * as Types from "./actionTypes";
import { createReducer } from "@reduxjs/toolkit";

const initContacts = [
  {
    id: "611a6308-e6f2-4506-b4cc-266e5951ab27",
    name: "Annie Copeland",
    number: "5555555",
  },
  {
    id: "cbc75291-de64-44c1-a0f9-36e7f0e450de",
    name: "Jim Black",
    number: "5555555",
  },
  {
    id: "a39e6b5b-91c3-4a14-b16f-a63cb88c90cb",
    name: "Rod Tos",
    number: "5555555",
  },
];

// {{{{{{{{{{{{{{{after "@reduxjs/toolkit"}}}}}}}}}}}}}}}

const contactsReducer = createReducer(initContacts, {
  [Types.ADD_CONTACT]: (state, action) => [...state, action.payload],
  [Types.REMOVE_CONTACT]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload.id),
});

export default contactsReducer;

// {{{{{{{{{{{{{{{before "@reduxjs/toolkit"}}}}}}}}}}}}}}}

// const contactsReducer = (state = initContacts, { type, payload }) => {
//   switch (type) {
//     case Types.ADD_CONTACT:
//       return [...state, payload];

//     case Types.REMOVE_CONTACT:
//       return state.filter((contact) => contact.id !== payload.id);

//     default:
//       return state;
//   }
// };
