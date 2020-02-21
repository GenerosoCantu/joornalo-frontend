import React from "react";
import NewsBlock from "./newsBlock.js";

const Galleries1 = ({ data }) => {
  return (
    <div className="galleries1 block">
      <div className="blockheader"><span>Galleries</span></div>
      {data.galleries.map((news, index) => (
        <NewsBlock news={news} displayDesc={false} key={index}></NewsBlock>
      ))}
    </div>
  )
}

export default Galleries1;