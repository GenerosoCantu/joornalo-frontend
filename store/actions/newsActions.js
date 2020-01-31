import store from '../../pages/store';
import { GET_NEWS, SET_LOADING, ADD_TEMPLATE, NEWS_ERROR, INIT_AGENT, GET_CONFIG } from '../types';
import { initAgent, test } from '../../services/configService';
import axios from 'axios';


const getTemplate = async (req, template, agent) => {
  try {
    setLoading();

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

};

export const getNews = (section, date, uuid, url, req) => async (dispatch, getState) => {
  try {
    setLoading();

    const path = `https://data.joornalo.com/news/${uuid.charAt(0)}/${uuid.charAt(1)}/${uuid}.json`

    const res = await axios.get(path);

    if (url !== res.data['url']) {
      dispatch({
        type: NEWS_ERROR,
        payload: `Redirect: ${res.data['url']}`
      });
    }

    const agent = getState().news.agent;
    const tmpl = agent + '-' + res.data['template'];

    let template = getState().news.templates[tmpl];

    if (!template) {
      template = await getTemplate(req, res.data['template'], getState().news.agent);
      dispatch({
        type: ADD_TEMPLATE,
        payload: {
          template: { [tmpl]: template }
        }
      });
    }

    dispatch({
      type: GET_NEWS,
      payload: {
        news: res.data,
        template: template
      }
    });

  } catch (err) {
    dispatch({
      type: NEWS_ERROR,
      payload: 'NotFound'
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};


export const getConfig = (req) => async dispatch => {
  try {
    const configUrl = `https://data.joornalo.com/config.json`
    const templatesUrl = `https://data.joornalo.com/templates/news/templates.json`;

    const [config, templates, agent] = await Promise.all([
      axios.get(configUrl),
      axios.get(templatesUrl),
      initAgent(req)
    ]);

    dispatch({
      type: GET_CONFIG,
      payload: {
        config: config.data,
        templates: templates.data,
        agent: agent
      }
    });

  } catch (err) {
    // dispatch({
    //   type: NEWS_ERROR,
    //   payload: 'NotFound'
    // });
  }
};