import React, { useReducer } from 'react';
import axios from 'axios';
import DataContext from './dataContext';
import DataReducer from './dataReducer';
import { GET_NEWS, SET_LOADING } from '../types';

const DataState = props => {
  const initialState = {
    news: {},
    front: {},
    loading: false
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  const getNews = async (section, date, uuid) => {

    setLoading();
    const url = `/section/${section}/${date}/${uuid}`;
    const path = `https://data.joornalo.com/news/${uuid.charAt(0)}/${uuid.charAt(1)}/${uuid}.json`
    const res = await axios.get(path);

    dispatch({
      type: GET_NEWS,
      payload: res.data
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <DataContext.Provider
      value={{
        news: state.news,
        loading: state.loading,
        getNews
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
