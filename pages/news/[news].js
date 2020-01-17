import Layout from '../../components/MyLayout';
import redirect from 'next-redirect';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Router from "next/router";


const Post = props => {
  return (
    <Layout>
      <p>{props.uuid}</p>

      <ul>
        <li>
          <Link href="/news/[news]" as="/news/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c9ZZ">
            <a>Bad link</a>
          </Link>
        </li>
        <li>
          <Link href="/news/[news]" as="/news/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977">
            <a>Good link</a>
          </Link>
        </li>
        <li>
          <Link href="/news/[news]" as="/news/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c988">
            <a>Good link</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}

// url ===> /news/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977


Post.getInitialProps = async function (context) {
  const { news } = context.query;
  const uuid = news.slice(-36);
  const titleUrl = uuid.slice(0, news.length - 36);
  const url = '/news/' + news;
  const path = 'https://data.joornalo.com/news' + uuid.charAt(0) + '/' + uuid.charAt(1) + '/' + uuid + '.json';

  console.log('---------------------------');
  console.log(uuid);

  // if (details !== '2020-01-11-world-middleeast-iraq-iran-us-troops-') {
  //   console.log(`Bad URL`);

  //   return redirect(context, '/news/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977');
  // }

  try {
    const res = await fetch(path);
    const data = await res.json();

    // console.log(url);
    // console.log(data['news-url']);

    if (url !== data['news-url']) {
      console.log(`Bad URL...redirected`);
      // return redirect(context, data['news-url'], 308);
    }

    return {
      uuid,
      data
    };

  } catch (e) {
    console.log(`Page not found`);
    // return redirect(context, '/notfound', 302);
    // return {
    //   data: { notFound: true }
    // };
  }

  console.log(`uuid: ${uuid}`);
  console.log(`details: ${details}`);

  return { uuid, details };
};

export default Post;