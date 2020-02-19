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
  'front1',
  'front2',
  'opinion1',
  'multimedia1',
  'weather1',
  'latest1',
  'sections1'
];

const ComponentsList = {};
blockList.forEach((block, index) => {
  ComponentsList[block] = dynamic(() => import(`./${block}`));
});

const Components = ({ component, data, params }) => {
  const key = Math.floor(Math.random() * 100000);

  if (typeof ComponentsList[component] !== "undefined") {
    return React.createElement(ComponentsList[component], {
      key,
      component,
      data,
      params
    });
  } else {
    console.log(component, "+++++++++++++++ Component not found!!!")
    return <div>Component not found!!!</div>
  }
};

export default Components;

