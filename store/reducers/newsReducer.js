import { GET_NEWS, SET_LOADING, ADD_TEMPLATE, NEWS_ERROR, GET_CONFIG, GET_OTHERNEWS, GET_FRONT, FRONT_ERROR } from '../types';

const initialState = {
  agent: null,
  config: null,
  news: null,
  templates: null,
  newsTemplate: null,
  newsTemplateName: null,
  front: null,
  frontTemplate: null,
  frontTemplateName: null,
  loading: false,
  agent: null,
  error: null,
  topNews: null,
  moreNews: null
};

export default (state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload.news,
        newsTemplateName: action.payload.templateName,
        newsTemplate: action.payload.template,
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
    case GET_OTHERNEWS:
      return {
        ...state,
        topNews: action.payload.topNews,
        moreNews: action.payload.moreNews
      }
    case GET_FRONT:
      //console.log(action.payload.front)
      return {
        ...state,
        front: action.payload.front,
        frontTemplateName: action.payload.templateName,
        frontTemplate: action.payload.template,
        topNews: action.payload.front.topNews,
        error: false,
        loading: false
      };
    default:
      return state;
  }
};