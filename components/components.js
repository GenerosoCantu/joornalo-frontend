import React from "react";
import dynamic from 'next/dynamic';

// https://www.storyblok.com/tp/react-dynamic-component-from-json
// https://nextjs.org/docs/advanced-features/dynamic-import


// this should come from Config.json
const blockList = [
  'block-adv',
  'block-header1',
  'block-header-mobile1',
  'block-news1',
  'block-news2',
  'block-news-mobile1',
  'block-news-header1',
  'block-other-news1',
  'block-related-news1',
  'block-most-viewed1',
  'block-featured1',
  'block-footer1',
  'block-footer-mobile1',
  'block-front1',
  'block-front2',
  'block-opinion1',
  'block-multimedia1',
  'block-weather1',
  'block-latest1',
  'block-sections1',
  'block-galleries1'
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

