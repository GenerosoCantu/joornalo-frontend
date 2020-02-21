import React from "react";
import NewsBlock from "./newsBlock.js";

const Multimedia1 = ({ data, text }) => {
  return (
    <div className="multimedia1 block">
      <div className="blockheader"><span>Multimedia</span></div>
      <NewsBlock news={data.multimedia[0]} displayDesc={false}></NewsBlock>
      {/* {data.multimedia.map((news, index) => (
        <NewsBlock news={news} displayDesc={false} key={index}></NewsBlock>
      ))} */}
    </div>
  )
}

export default Multimedia1;