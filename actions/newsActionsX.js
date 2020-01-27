import { GET_NEWS, SET_LOADING, NEWS_ERROR, INIT_AGENT } from './types';
import { initAgent, test } from '../services/configService';

// const getNews = async (section, date, uuid) => {

//   setLoading();
//   const url = `/section/${section}/${date}/${uuid}`;
//   const path = `https://data.joornalo.com/news/${uuid.charAt(0)}/${uuid.charAt(1)}/${uuid}.json`
//   const res = await axios.get(path);

//   dispatch({
//     type: GET_NEWS,
//     payload: res.data
//   });
// };

export const getNews = (section, date, uuid, req) => async dispatch => {
  console.log('getNews ++++++++++++++++++++++++++++++');
  try {
    setLoading();

    const url = `/section/${section}/${date}/${uuid}`;
    const path = `https://data.joornalo.com/news/${uuid.charAt(0)}/${uuid.charAt(1)}/${uuid}.json`

    //const res = await axios.get(path);
    const res = await fetch(path);
    const news = await res.json();

    // const agent = initAgent(req);
    // const tmpl = agent + '-' + news['template'];

    // const templateUrl = `https://data.joornalo.com/templates/news/${tmpl}.json`;
    // const res2 = await fetch(templateUrl);
    // const template = await res2.json();
    const template = { ok: 'yes' };

    dispatch({
      type: GET_NEWS,
      payload: { news, template }  //res.data
    });

  } catch (err) {

    console.log('***********Error');
    // dispatch({
    //   type: NEWS_ERROR,
    //   payload: err.response.statusText
    // });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
