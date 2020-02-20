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
      <Link href={news.url}>
        <a>
          {image}
          <h2>{news.title}</h2>
          {desc}
        </a>
      </Link>
    </div>
  )
}

const imageUrl = (url) => {
  return 'https://data.joornalo.com' + url;
}

export default NewsBlock;