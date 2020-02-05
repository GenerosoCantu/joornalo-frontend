import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import { getConfig } from '../store/actions/newsActions';

const Index = props => (
  <Layout>
    <h1>Joornalo</h1>
    <Link href="/section/[section]/[date]/[id]" as="/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c988">
      <a>News link</a>
    </Link>
  </Layout>
);

Index.getInitialProps = async function (context) {
  const { store } = context;

  if (!process.browser) {
    await store.dispatch(getConfig(context.req));
  }

  return {};
};

export default Index;