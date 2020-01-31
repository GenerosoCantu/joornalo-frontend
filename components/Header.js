import { connect } from 'react-redux';
import Link from 'next/link'

const headerStyle = {
  background: '#f01818'
}

const linkStyle = {
  marginRight: 15
}

const Header = ({ menu }) => {
  console.log(menu)
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

const mapStateToProps = state => ({
  menu: state.news.config['menu-header'],
});

export default connect(
  mapStateToProps
)(Header);
