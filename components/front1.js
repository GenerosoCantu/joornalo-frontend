import React from "react";
import NewsBlock from "./newsBlock.js";

const Front1 = ({ data }) => {

  return (
    <div className="front1">
      <NewsBlock news={data.frontNews[0]}></NewsBlock>
    </div>
  )
}

export default Front1;