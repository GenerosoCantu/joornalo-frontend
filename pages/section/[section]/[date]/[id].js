import { useRouter } from 'next/router'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../../../components/MyLayout';
import Router from "next/router";
import redirect from 'next-redirect';

// url ===> http://localhost:3000/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977


const News = (props) => {
  console.log('---------------------------------------------1');
  if (props.notFound) {
    const router = useRouter();
    router.replace('/notfound');
    return;
  }

  return (
    <Layout>
      <h1>News story</h1>
      <h1>uuid:: {props.uuid}</h1>
      <h1>title:: {props.data.title}</h1>

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
          <Link href="/section/[section]/[date]/[id]" as="/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c988">
            <a>Good link</a>
          </Link>
        </li>
      </ul>

    </Layout>
  )
}

News.getInitialProps = async function (context) {

  const { section, date, id } = context.query;
  const uuid = id.slice(-36);
  const titleUrl = id.slice(0, id.length - 36);
  const url = '/section/' + section + '/' + date + '/' + id;
  const path = 'https://data.joornalo.com/' + uuid.charAt(0) + '/' + uuid.charAt(1) + '/' + uuid + '.json';

  console.log(uuid);

  try {
    const res = await fetch(path);
    const data = await res.json();

    if (url !== data['page-url']) {
      //console.log(`Bad URL...redirected`);
      return redirect(context, data['page-url'], 308);
    }

    return {
      uuid,
      data
    };

  } catch (e) {
    //console.log(`Page not found`);
    return redirect(context, '/notfound', 302);
  }

};

export default News