import { useRouter } from 'next/router'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../../../components/MyLayout';

// url ===> http://localhost:3000/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977


const News = (props) => {
  const router = useRouter()
  const { id, date, section } = router.query
  const uuid = id.slice(-36);
  const title = id.slice(0, id.length - 36);

  const shows = props.shows;

  return (
    <Layout>
      <h1>uuid: {uuid}</h1>
      <h1>title: {title}</h1>
      <h1>section: {section}</h1>
      <h1>date: {date}</h1>

      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <Link href="/p/[id]" as={`/p/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>

    </Layout>
  )
}

News.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
  // return {};
};

export default News