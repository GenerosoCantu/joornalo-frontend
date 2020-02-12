import { connect } from 'react-redux';
import Link from 'next/link'
import Menu from './menu1'

const headerStyle = {
  background: '#f01818'
}

const linkStyle = {
  marginRight: 15
}

const date = () => {

  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ],
    months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    date = new Date();

  const displayDate =
    days[date.getDay()] +
    ', ' +
    months[date.getMonth()] +
    ' ' +
    date.getDate() +
    ', ' +
    date.getFullYear();

  return displayDate;
}

const Footer1 = ({ menu }) => {

  return (
    // <div style={headerStyle}>
    //   <Link href="/">
    //     <a style={linkStyle}>Home</a>
    //   </Link>
    //   <Link href="/about">
    //     <a style={linkStyle}>About</a>
    //   </Link>
    // </div>

    <>
      <div className="header">
        <div className="container-fluid desktop">
          <div className="row">
            <div className="col-250">
              <div className="logo">
                <Link href="/"><a>Joornalo</a></Link>
              </div>
            </div>

            <div className="col-auto">

            </div>

            <div className="col-250">
              <div className="row">
                <div className="col">
                  <div className="search-box">
                    {/* <input id="search" value="" placeholder="Buscar" type="text" onKeydown="_keydown" /> */}
                    {/* <div on-tap="_submit" class="search-icon"></div> */}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="date">{date()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="stripe">
        <div className="container-fluid">
          <Menu items={menu} />
        </div>
      </div> */}

    </>

  )
}

const mapStateToProps = state => ({
  menu: state.news.config['menu-header'],
});

export default connect(
  mapStateToProps
)(Footer1);
