import React from "react";
import NewsBlock from "./newsBlock.js";

const Front2 = ({ data }) => {
  return (
    <div className="front2 block">
      <NewsBlock news={data.frontNews[1]} displayDesc={false}></NewsBlock>
      <NewsBlock news={data.frontNews[2]} displayDesc={false}></NewsBlock>
      <NewsBlock news={data.frontNews[3]} displayDesc={false}></NewsBlock>
      <NewsBlock news={data.frontNews[4]} displayDesc={false}></NewsBlock>
    </div>
  )
}

export default Front2;