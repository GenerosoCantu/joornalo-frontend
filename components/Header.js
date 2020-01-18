import Link from 'next/link'

const headerStyle = {
  background: '#f01818'
}

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div style={headerStyle}>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  )
}
