// import { combineReducers } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contactsReducer";
import filterReducer from "./filterReducer";

// {{{{{{{{{{{{{{{after "@reduxjs/toolkit"}}}}}}}}}}}}}}}

const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});

export default store;

// {{{{{{{{{{{{{{{before "@reduxjs/toolkit"}}}}}}}}}}}}}}}

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const store = createStore(rootReducer, devToolsEnhancer());

// export default store;
