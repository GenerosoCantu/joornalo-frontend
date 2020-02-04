import { GET_NEWS, SET_LOADING, ADD_TEMPLATE, NEWS_ERROR, GET_CONFIG } from '../types';

const initialState = {
  agent: null,
  config: null,
  news: null,
  templates: null,
  template: null,
  front: null,
  loading: false,
  agent: null,
  error: null
};

export default (state = initialState, action) => {
  // console.log(action.type);
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
    case GET_CONFIG:
      return {
        ...state,
        config: action.payload.config,
        templates: action.payload.templates,
        agent: action.payload.agent
      };
    case ADD_TEMPLATE:
      return {
        ...state,
        templates: Object.assign(state.templates, action.payload.template)
      };
    default:
      return state;
  }
};