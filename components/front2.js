import React from "react";
import NewsBlock from "./newsBlock.js";

const Front2 = ({ data }) => {
  return (
    <div className="front2">
      <NewsBlock news={data.frontNews[1]}></NewsBlock>
      <NewsBlock news={data.frontNews[2]}></NewsBlock>
      <NewsBlock news={data.frontNews[3]}></NewsBlock>
    </div>
  )
}

export default Front2;