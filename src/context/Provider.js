import { createContext, useReducer } from "react";
import authReducer from "./reducers/authReducer";
import authInitialState from "./initialsStates/authState";
import contactsInitialState from "./initialsStates/contactsState";
import contactsReducer from "./reducers/contactsReducer";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsInitialState
  );

  return (
    <GlobalContext.Provider
      value={{ authState, contactsState, authDispatch, contactsDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
