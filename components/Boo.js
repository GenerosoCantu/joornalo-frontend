import React from "react";

const Boo = (props) => {
  return (
    <div className="foo">
      <hr />
      <h2>BOO: {props.block.text}</h2>
    </div>
  )
}

export default Boo;