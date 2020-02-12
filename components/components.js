import React from "react";
import dynamic from 'next/dynamic';

// https://www.storyblok.com/tp/react-dynamic-component-from-json
// https://nextjs.org/docs/advanced-features/dynamic-import


// this should come from Config.json
const blockList = [
  'adv',
  'header1',
  'header-mobile1',
  'news1',
  'news2',
  'news-mobile1',
  'news-header1',
  'other-news1',
  'related-news1',
  'most-viewed1',
  'featured1',
  'footer1',
  'footer-mobile1',
];

const ComponentsList = {};
blockList.forEach((block, index) => {
  ComponentsList[block] = dynamic(() => import(`./${block}`));
});

const Components = ({ component, data, text }) => {
  const key = Math.floor(Math.random() * 100000);

  if (typeof ComponentsList[component] !== "undefined") {
    //console.log("+++++++++++++++ Component: ", component)
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

