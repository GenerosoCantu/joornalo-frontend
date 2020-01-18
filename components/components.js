// https://www.storyblok.com/tp/react-dynamic-component-from-json

import React from "react";
import News1 from "./News1";
import Bar from "./Bar";
import Boo from "./Boo";

const ComponentsList = {
  news1: News1,
  bar: Bar,
  boo: Boo
};


const Components = ({ component, data, text }) => {
  const key = Math.floor(Math.random() * 100000);

  //if (typeof ComponentsList[block.component] !== "undefined") {
  // return (<div>x</div>)
  return React.createElement(ComponentsList[component], {
    key,
    component,
    data,
    text
  });
  // } else {
  //   console.log("+++++++++++++++")
  // }
};

export default Components;

