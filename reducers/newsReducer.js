import { GET_NEWS, SET_LOADING, GET_TEMPLATE, NEWS_ERROR } from '../actions/types';

const initialState = {
  news: null,
  template: null,
  front: null,
  loading: false,
  agent: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload.news,
        template: action.payload.template,
        error: false,
        loading: false
      };
    case NEWS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};