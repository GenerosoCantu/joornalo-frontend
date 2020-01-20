import React from "react";
import dynamic from 'next/dynamic';

// https://www.storyblok.com/tp/react-dynamic-component-from-json
// https://nextjs.org/docs/advanced-features/dynamic-import


// this should come from Config.json
const blockList = [
  'news1',
  'bar',
  'boo'
];

const ComponentsList = {};
blockList.forEach((block, index) => {
  ComponentsList[block] = dynamic(() => import(`./${block}`));
});

const Components = ({ component, data, text }) => {
  const key = Math.floor(Math.random() * 100000);

  if (typeof ComponentsList[component] !== "undefined") {
    return React.createElement(ComponentsList[component], {
      key,
      component,
      data,
      text
    });
  } else {
    console.log("+++++++++++++++ Component not found!!!")
    return <div>Component not found!!!</div>
  }
};

export default Components;

