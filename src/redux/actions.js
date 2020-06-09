// import { v4 as uuidv4 } from "uuid";
import * as Types from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";

// {{{{{{{{{{{{{{{after "@reduxjs/toolkit"}}}}}}}}}}}}}}}

export const addContact = createAction(Types.ADD_CONTACT);
export const removeContact = createAction(Types.REMOVE_CONTACT);
export const changeFilter = createAction(Types.CHANGE_FILTER);

// {{{{{{{{{{{{{{{before "@reduxjs/toolkit"}}}}}}}}}}}}}}}

// export const addContact = (contact) => ({
//   type: Types.ADD_CONTACT,
//   payload: {
//     id: uuidv4(),
//     ...contact,
//   },
// });

// export const removeContact = (id) => ({
//   type: Types.REMOVE_CONTACT,
//   payload: {
//     id,
//   },
// });

// export const changeFilter = (value) => ({
//   type: Types.CHANGE_FILTER,
//   payload: value,
// });
