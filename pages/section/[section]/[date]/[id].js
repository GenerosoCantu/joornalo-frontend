import React from 'react';
import Link from 'next/link';
import redirect from 'next-redirect';
import Error from 'next/error'
import { connect } from 'react-redux';
import { getNews, getOtherNews, getConfig } from '../../../../store/actions/newsActions';
import Template from "../../../../components/Template.js";
import Layout from '../../../../components/MyLayout';

// url ===> http://localhost:3000/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977


const News = ({ agent, id, uuid, news, templateName, template, notFound }) => {

  const getTitle = (news) => {
    return (news) ? news.title : '';
  }

  if (notFound) {
    return <Error statusCode='404' />
  }

  return (
    <Layout agent={agent}>

      <div className={templateName}>
        <Template grid={template} data={news} />
      </div>


      <ul>
        <li>
          <Link href="/section/[section]/[date]/[id]" as="/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c9ZZ">
            <a>Bad link</a>
          </Link>
        </li>
        <li>
          <Link href="/section/[section]/[date]/[id]" as="/section/world-europe/2020-01-11/harry-meghan-drop-royal-duties-4c50e545-539e-4893-b505-1edc2de3c988">
            <a>Link: Megan & Harry</a>
          </Link>
        </li>
        <li>
          <Link href="/section/[section]/[date]/[id]" as="/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c999">
            <a>Link: Iran Nuclear Deal</a>
          </Link>
        </li>
      </ul>

    </Layout>
  )
}

News.getInitialProps = async function (context, agent) {
  const { store } = context;
  const { section, date, id } = context.query;
  const uuid = id.slice(-36);
  const url = `/section/${section}/${date}/${id}`;
  let notFound = false;

  console.log(agent);

  try {
    if (!process.browser) {
      await store.dispatch(getConfig(context.req));
    }
    await store.dispatch(getNews(section, date, uuid, url, context.req));
    await store.dispatch(getOtherNews(section));

    const error = store.getState().news.error;

    if (error && error.indexOf('Redirect: ') == 0) {
      return redirect(context, error.slice(10), 308);
    }
    if (error == 'NotFound') {
      notFound = true;
    }

  } catch (err) {
    console.log(err);
  }

  return {
    agent,
    id,
    uuid,
    url,
    notFound
  };

};

const mapStateToProps = state => ({
  news: state.news.news,
  topNews: state.news.topNews,
  moreNews: state.news.moreNews,
  templateName: state.news.newsTemplateName,
  template: state.news.newsTemplate,
  loading: state.news.loading
});

export default connect(
  mapStateToProps,
  { getNews, getOtherNews }
)(News);