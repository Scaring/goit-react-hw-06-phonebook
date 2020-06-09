import * as Types from "./actionTypes";
import { createReducer } from "@reduxjs/toolkit";

// {{{{{{{{{{{{{{{after "@reduxjs/toolkit"}}}}}}}}}}}}}}}

const filterReducer = createReducer("", {
  [Types.CHANGE_FILTER]: (state, action) => action.payload,
});

export default filterReducer;

// {{{{{{{{{{{{{{{before "@reduxjs/toolkit"}}}}}}}}}}}}}}}

// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case Types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
