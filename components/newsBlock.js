import React from "react";
import Link from 'next/link'

const NewsBlock = ({ news, diaplayImage, displayDesc }) => {

  let image = '',
    desc = '';

  if ((typeof diaplayImage === 'undefined') || diaplayImage) {
    image = <img src={news.img} />;
  }
  if ((typeof displayDesc === 'undefined') || displayDesc) {
    desc = <div>{news.desc}</div>;
  }
  return (
    <div className="NewsBlock">
      <Link href="/section/[section]/[date]/[id]" as={news.url}>
        <a>
          <div className="img">
            {image}
          </div>
          <h2>{news.title}</h2>
          <div className="desc">
            {desc}
          </div>
        </a>
      </Link>
    </div>
  )
}

const imageUrl = (url) => {
  return 'https://data.joornalo.com' + url;
}

export default NewsBlock;