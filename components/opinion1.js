import React from "react";
import Link from 'next/link'

const Opinion1 = ({ data }) => {
  return (
    <div className="opinion1 block">
      <div className="blockheader"><span>Opinion</span></div>

      <ol>
        {data.opinion.map((news, index) => (
          <li key={index}>
            <Link href={news.url}>
              <a>
                <h5>{news.column}</h5>
                <h6>{news.author}</h6>
                <h5 className="title">{news.title}</h5>
              </a>
            </Link>
          </li>
        ))}
      </ol>

    </div>
  )
}

export default Opinion1;