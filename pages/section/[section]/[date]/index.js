import Layout from '../../../../components/MyLayout';
import fetch from 'isomorphic-unfetch';

const SectionDate = props => (
  <Layout>
    <h1>Section or Sub-section with date</h1>
    <h1>{props.section}</h1>
    <h1>{props.date}</h1>
  </Layout>
);

SectionDate.getInitialProps = async function (context) {
  const { section, date } = context.query;

  console.log(`section: ${section}`);
  console.log(`date: ${date}`);

  return { section, date };
};

export default SectionDate;