const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: '1px solid #DDD'
}

export default function Layout(props) {
  return (
    <div className="container-fluid" agent={props.agent} style={layoutStyle}>
      {props.children}
    </div>
  )
}
