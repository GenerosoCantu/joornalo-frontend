import Layout from '../components/MyLayout.js'
import Link from 'next/link';

export default function NotFound() {
  return (
    <Layout>
      <p>Page not Found</p>
      <Link href="/section/[section]/[date]/[id]" as="/section/world-middleeast/2020-01-11/iraq-iran-us-troops-4c50e545-539e-4893-b505-1edc2de3c999">
        <a>Good link</a>
      </Link>
    </Layout>
  )
}
