import React, { useReducer } from 'react';
import NewsContext from './newsContext';
import NewsReducer from './newsReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const NewsState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(NewsReducer, initialState);

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <NewsContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};

export default NewsState;
