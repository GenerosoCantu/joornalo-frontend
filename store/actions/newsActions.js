import store from '../../pages/store';
import { GET_NEWS, SET_LOADING, ADD_TEMPLATE, NEWS_ERROR, INIT_AGENT, GET_CONFIG, GET_OTHERNEWS } from '../types';
import { initAgent, test } from '../../services/configService';
import axios from 'axios';
import Parser from 'html-react-parser';


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

export const getOtherNews = (section) => async (dispatch, getState) => {
  try {
    setLoading();

    const moreUrl = `https://data.joornalo.com/news/${section}-more-news.json`;

    const res = await axios.get(moreUrl);

    dispatch({
      type: GET_OTHERNEWS,
      payload: {
        topNews: res.data.topNews,
        moreNews: res.data.moreNews,
      }
    });

  } catch (err) {
    dispatch({
      type: NEWS_ERROR,
      payload: 'NotFound'
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

    // let tmp = unescape(res.data.text);
    // let find = tmp.split('<embed id="');

    // for (let i = find.length - 1; i--;) {
    //   let mediaNum = parseInt(find[i + 1].charAt(0));
    //   if (res.data.media[mediaNum - 1]) {
    //     find[i + 1] = '<div class="embed">' + res.data.media[mediaNum - 1].embed + '</div>' + find[i + 1].substring(5);
    //   } else {
    //     find[i + 1] = find[i + 1].substring(5);
    //   }
    // }

    // tmp = find.join('');
    // find = tmp.split('<image id="');
    // for (let i = find.length - 1; i--;) {
    //   let imageNum = parseInt(find[i + 1].charAt(0));
    //   if (res.data.images[imageNum - 1]) {
    //     find[i + 1] = '<img src="https://data.joornalo.com/news/4/c/' + res.data.images[imageNum - 1].url + '" />' + find[i + 1].substring(5);
    //   } else {
    //     find[i + 1] = find[i + 1].substring(5);
    //   }
    // }

    // res.data.modText = Parser(find.join(''));


    // res.data.mainImgUrl = 'https://data.joornalo.com/news/4/c/' + res.data.images[0].url;

    //console.log(data);

    dispatch({
      type: GET_NEWS,
      payload: {
        news: res.data,
        templateName: 'template-' + res.data['template'],
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