import React from 'react';
import Link from 'next/link';
import redirect from 'next-redirect';
import Error from 'next/error'
import { connect } from 'react-redux';
import { getFront, getConfig } from '../store/actions/newsActions';
import Template from "../components/Template.js";
import Layout from '../components/MyLayout';

const Index = ({ agent, front, templateName, template }) => {
  return (

    <Layout agent={agent}>

      <div className={templateName}>
        <Template grid={template} data={front} />
      </div>

    </Layout>
  )
};

Index.getInitialProps = async function (context, agent) {
  const { store } = context;

  if (!process.browser) {
    await store.dispatch(getConfig(context.req));
  }

  await store.dispatch(getFront('home', context.req));

  return {
    agent
  };
};

const mapStateToProps = state => ({
  front: state.news.front,
  templateName: state.news.frontTemplateName,
  template: state.news.frontTemplate,
  loading: state.news.loading
});

export default connect(
  mapStateToProps,
  { getFront }
)(Index);