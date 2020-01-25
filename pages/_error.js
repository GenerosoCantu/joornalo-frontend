import Layout from '../components/MyLayout.js'
import Link from 'next/link';

function Error({ statusCode }) {
  return (
    <Layout>
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
      <Link href="/section/[section]/[date]/[id]" as="/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c999">
        <a>Good link</a>
      </Link>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error