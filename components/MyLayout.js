import Header from './Header'

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <div className="container-fluid" style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  )
}
