import React from "react";
import NewsBlock from "./newsBlock.js";

const Featured1 = ({ data }) => {
  return (
    <div className="featured1 block">
      <div className="blockheader"><span>Featured</span></div>
      {data.featured.map((news, index) => (
        <NewsBlock news={news} displayDesc={false} key={index}></NewsBlock>
      ))}
    </div>
  )
}

export default Featured1;