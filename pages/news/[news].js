import Layout from '../../components/MyLayout';

import redirect from 'next-redirect';

const Post = props => {
  return (
    <Layout>
      <p>{props.uuid}</p>
    </Layout>
  );
}

// url ===> /news/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977


Post.getInitialProps = async function (context) {
  const { news } = context.query;
  const uuid = news.slice(-36);
  const details = news.slice(0, news.length - 36);

  if (details !== '2020-01-11-world-middleeast-iraq-iran-us-troops-') {
    console.log(`Bad URL`);

    return redirect(context, '/news/2020-01-11-world-middleeast-iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977');
  }

  console.log(`uuid: ${uuid}`);
  console.log(`details: ${details}`);

  return { uuid, details };
};

export default Post;