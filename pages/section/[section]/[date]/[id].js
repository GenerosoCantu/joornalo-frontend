// import { useRouter } from 'next/router'
import React, { useEffect, useContext } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Layout from '../../../../components/MyLayout';
import redirect from 'next-redirect';
import Template from "../../../../components/Template.js";
import Error from 'next/error'
import { getNews, getConfig } from '../../../../store/actions/newsActions';

// url ===> http://localhost:3000/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977


const News = ({ id, uuid, news, template, notFound }) => {

  const getTitle = (news) => {
    return (news) ? news.title : '';
  }

  if (notFound) {
    return <Error statusCode='404' />
  }

  return (
    <Layout>
      <h1>News story</h1>
      {/* <h1>id:: {id}</h1> */}
      <h1>uuid:: {uuid}</h1>
      <h1>title:: {getTitle(news)}</h1>

      <ul>
        <li>
          <Link href="/section/[section]/[date]/[id]" as="/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c9ZZ">
            <a>Bad link</a>
          </Link>
        </li>
        <li>
          <Link href="/section/[section]/[date]/[id]" as="/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977">
            <a>Good link</a>
          </Link>
        </li>
        <li>
          <Link href="/section/[section]/[date]/[id]" as="/section/world-europe/2020-01-11/harry-meghan-drop-royal-duties-4c50e545-539e-4893-b505-1edc2de3c988">
            <a>Good link</a>
          </Link>
        </li>
        <li>
          <Link href="/section/[section]/[date]/[id]" as="/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c999">
            <a>Good link</a>
          </Link>
        </li>
      </ul>

      <Template grid={template} data={news} />

    </Layout>
  )
}

News.getInitialProps = async function (context, eureka) {
  const { store } = context;
  const { section, date, id } = context.query;
  const uuid = id.slice(-36);
  const url = `/section/${section}/${date}/${id}`;
  let notFound = false;

  console.log(eureka);

  try {
    if (!process.browser) {
      await store.dispatch(getConfig(context.req));
    }
    await store.dispatch(getNews(section, date, uuid, url, context.req));
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
    id,
    uuid,
    url,
    notFound
  };

};

const mapStateToProps = state => ({
  news: state.news.news,
  template: state.news.template,
  loading: state.news.loading
});

export default connect(
  mapStateToProps,
  { getNews }
)(News);