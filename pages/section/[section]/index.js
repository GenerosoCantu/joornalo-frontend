import Layout from '../../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'

const Section = props => (
  <React.Fragment>
    <Head>
      <title>Joornalo: {props.section}</title>
    </Head>
    <Layout>
      <h1>Section or Sub-section</h1>
      <h1>{props.section}</h1>
    </Layout>
  </React.Fragment>
);

Section.getInitialProps = async function (context) {
  const { section } = context.query;

  console.log(`section: ${section}`);

  return { section };
};

export default Section;