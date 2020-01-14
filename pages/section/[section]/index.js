import Layout from '../../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const Section = props => (
  <Layout>
    <h1>Section or Sub-section</h1>
    <h1>{props.section}</h1>
  </Layout>
);

Section.getInitialProps = async function (context) {
  const { section } = context.query;

  console.log(`section: ${section}`);

  return { section };
};

export default Section;