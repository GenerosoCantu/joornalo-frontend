import { useRouter } from 'next/router'
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../../../../components/MyLayout';
import redirect from 'next-redirect';
import Components from "../../../../components/components.js";

// url ===> http://localhost:3000/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c977



const Template = ({ grid, data }) => {
  return grid.rows.map((row, index) => {
    return (
      <div className="row" key={`row-${index}`}>
        {row.column.map((col, index) => {
          return (
            <div className={`col-${col.width}`} key={`col-${index}`}>
              <Components block={col.block} data={data} />
            </div>
          );
        })}
      </div>
    );
  });
};


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
          <Link href="/section/[section]/[date]/[id]" as="/section/world/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c988">
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

  try {
    const res = await fetch(path);
    const data = await res.json();

    if (url !== data['url']) {
      console.log(`Bad URL...redirected`);
      return redirect(context, data['url'], 308);
    }

    const templateUrl = `https://data.joornalo.com/templates/news/${data['template']}.json`;
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