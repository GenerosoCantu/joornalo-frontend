import React from "react";
import NewsBlock from "./newsBlock.js";

const Sections1 = ({ data }) => {
  return (
    <div className="sections1 block">
      {data.sectionNews.map((section, index) => (
        <div key={index}>
          <div className="blockheader"><span>{section.section}</span></div>
          <div className="row">
            {section.news.map((news, index0) => (
              <NewsBlock news={news} displayDesc={false} key={index0}></NewsBlock>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sections1;