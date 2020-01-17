// https://www.storyblok.com/tp/react-dynamic-component-from-json

import React from "react";
import Foo from "./Foo";
import Bar from "./Bar";
import Boo from "./Boo";

const ComponentsList = {
  foo: Foo,
  bar: Bar,
  boo: Boo
};


const Components = (props) => {
  const block = props.block;
  const key = Math.floor(Math.random() * 100000);
  //if (typeof ComponentsList[block.component] !== "undefined") {
  return React.createElement(ComponentsList[block.component], {
    key,
    block: block,
    data: props.data
  });
  // } else {
  //   console.log("+++++++++++++++")
  // }
};

export default Components;

