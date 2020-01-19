// https://www.storyblok.com/tp/react-dynamic-component-from-json

import React from "react";
import news1 from "./news1";
import bar from "./bar";
import boo from "./boo";

const ComponentsList = {
  news1: news1,
  bar: bar,
  boo: boo
};

// https://nextjs.org/docs/advanced-features/dynamic-import

// import dynamic from 'next/dynamic'
// const DynamicComponent = dynamic(() => import('../components/hello'))

// search for dynamic imports



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

