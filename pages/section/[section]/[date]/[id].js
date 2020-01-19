import { useRouter } from 'next/router'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../../../components/MyLayout';
import redirect from 'next-redirect';
import Template from "../../../../components/Template.js";

// url ===> http://localhost:3000/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977


const News = (props) => {

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

  // console.log(userAgent);
  // console.log("mobile:", mobile);
  // console.log("tablet:", tablet);
  // console.log("desktop:", desktop);

  try {
    const res = await fetch(path);
    const data = await res.json();

    if (url !== data['url']) {
      console.log(`Bad URL...redirected`);
      return redirect(context, data['url'], 308);
    }

    if (desktop || tablet) { }

    const tmpl = ((desktop || tablet) ? 'desktop-' : 'mobile-') + data['template'];
    //console.log("tmpl:", tmpl);

    const templateUrl = `https://data.joornalo.com/templates/news/${tmpl}.json`;
    const res2 = await fetch(templateUrl);
    const template = await res2.json();

    return {
      uuid,
      data,
      template
    };

  } catch (e) {
    console.log(`Page not found`);
    return redirect(context, '/notfound', 302);
  }

};

export default News