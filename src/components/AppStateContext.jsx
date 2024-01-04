import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AppStateContext = createContext();

const initialState = {
  items: [],
  completedItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return { ...state, items: action.payload };
    case 'SET_COMPLETED_ITEMS':
      return { ...state, completedItems: action.payload };
    default:
      return state;
  }
};

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('Items')) || [];
    const storedCompletedItems = JSON.parse(localStorage.getItem('CompletedItems')) || [];

    dispatch({ type: 'SET_ITEMS', payload: storedItems });
    dispatch({ type: 'SET_COMPLETED_ITEMS', payload: storedCompletedItems });
  }, []);

  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(state.items));
    localStorage.setItem('CompletedItems', JSON.stringify(state.completedItems));
  }, [state.items, state.completedItems]);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
