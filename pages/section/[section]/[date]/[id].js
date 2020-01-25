// import { useRouter } from 'next/router'
import React, { useEffect, useContext } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../../../components/MyLayout';
import redirect from 'next-redirect';
import Template from "../../../../components/Template.js";
import Error from 'next/error'
import ConfigContext from '../../../../context/config/configContext';

// url ===> http://localhost:3000/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977


const News = (props) => {

  const configContext = useContext(ConfigContext);
  const { agent, setAgent } = configContext;

  if (!agent && props.agent) {
    console.log('Set Agent  ************************');
    useEffect(() => {
      setAgent(props.agent);
      // eslint-disable-next-line
    }, []);
  }

  if (props.notFound) {
    return <Error statusCode='404' />
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

      <Template grid={props.template} data={props.data} />

    </Layout>
  )
}

News.getInitialProps = async function (context) {

  const { section, date, id } = context.query;
  const uuid = id.slice(-36);
  const url = `/section/${section}/${date}/${id}`;
  const path = `https://data.joornalo.com/news/${uuid.charAt(0)}/${uuid.charAt(1)}/${uuid}.json`;

  console.log(uuid);

  const initialAgent = () => {

    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = context.req.headers['user-agent']
    }

    const mobilex = userAgent.match(/(Mobile)/g);
    const android = userAgent.match(/(Android)/g);
    const iPad = userAgent.match(/(iPad)/g);

    const mobile = Boolean(mobilex) && !iPad;
    const tablet = (!mobilex && Boolean(android)) || Boolean(iPad);
    const desktop = !mobile && !tablet;

    return ((desktop || tablet) ? 'desktop' : 'mobile');

  };


  try {
    const res = await fetch(path);
    const data = await res.json();

    if (url !== data['url']) {
      console.log(`Bad URL...redirected`);
      return redirect(context, data['url'], 308);
    }

    const agent = initialAgent();
    const tmpl = agent + '-' + data['template'];

    const templateUrl = `https://data.joornalo.com/templates/news/${tmpl}.json`;
    const res2 = await fetch(templateUrl);
    const template = await res2.json();

    return {
      uuid,
      data,
      agent,
      template
    };

  } catch (e) {
    console.log(`Page not found`);
    console.log(e);
    return redirect(context, '/notfound', 302);
  }

};

export default News