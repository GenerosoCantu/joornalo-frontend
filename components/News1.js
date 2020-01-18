import React from "react";
import Parser from 'html-react-parser';

export default ({ data, text }) => {
  // console.log(props.data.media)
  return (
    <div className="news1">
      <hr />
      <h1>{data.title} </h1>
      <div>{Parser(data.text)}</div>
    </div>
  )
};
