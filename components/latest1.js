import React from "react";
import NewsBlock from "./newsBlock.js";

const Latest1 = ({ data }) => {
  return (
    <div className="latest1 block">
      <div className="blockheader"><span>Latest</span></div>
      {data.latest.map((news, index) => (
        <NewsBlock news={news} displayDesc={false} key={index}></NewsBlock>
      ))}
    </div>
  )
}

export default Latest1;