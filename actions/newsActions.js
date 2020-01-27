import { GET_NEWS, SET_LOADING, GET_TEMPLATE, NEWS_ERROR, INIT_AGENT } from './types';
import { initAgent, test } from '../services/configService';
import axios from 'axios';

const getTemplate = async (req, template) => {
  console.log('getTemplate ++++++++++++++++++++++++++++++');
  try {
    setLoading();

    const agent = await initAgent(req);
    const tmpl = agent + '-' + template;
    const templateUrl = `https://data.joornalo.com/templates/news/${tmpl}.json`;

    const res = await axios.get(templateUrl);

    return res.data;

  } catch (err) {
    console.log('***********Template Error');
    dispatch({
      type: NEWS_ERROR,
      payload: err.statusText
    });
  }

}

export const getNews = (section, date, uuid, url, req) => async dispatch => {
  console.log('getNews ++++++++++++++++++++++++++++++');
  try {
    setLoading();

    const path = `https://data.joornalo.com/news/${uuid.charAt(0)}/${uuid.charAt(1)}/${uuid}.json`

    const res = await axios.get(path);

    if (url !== res.data['url']) {
      throw `Redirect: ${res.data['url']}`
    }

    const template = await getTemplate(req, res.data['template']);

    dispatch({
      type: GET_NEWS,
      payload: {
        news: res.data,
        template: template
      }
    });

  } catch (err) {
    console.log('***********Error');
    throw err
    // dispatch({
    //   type: NEWS_ERROR,
    //   payload: err.statusText
    // });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
