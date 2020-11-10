import React, { createContext, useReducer } from 'react';

export const AuthContext = createContext({});

const initialState = {
  username: '',
  isAuth: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOG_OUT':
      return {
        ...state,
        isAuth: false,
      };
    case 'LOG_IN':
      return {
        ...state,
        isAuth: true,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  const { isAuth, username } = authState;

  const logOut = (payload) => authDispatch({ type: 'LOG_OUT', payload });
  const logIn = (payload) => authDispatch({ type: 'LOG_IN', payload });

  return (
    <AuthContext.Provider value={{ isAuth, username, logOut, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};
