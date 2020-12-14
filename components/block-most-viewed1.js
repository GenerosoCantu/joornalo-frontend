import React from "react";
import { connect } from 'react-redux';
import Link from 'next/link'
import NewsBlock from "./newsBlock.js";

const MostViewed1 = ({ topNews }) => {
  if (!topNews) return null
  return (
    <div className="most-viewed block">
      <div className="blockheader"><span>Most Viewed</span></div>
      <ul>
        {topNews.map((news, index) => (
          <Link href="/section/[section]/[date]/[id]" as={news.url} key={index}>
            <li>
              <span>{index + 1}</span>
              <div>
                {(index == 0) ? <img src={news.img} /> : null}
                <a>{news.title}</a>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

const imageUrl = (url) => {
  return 'https://data.joornalo.com' + url;
}

const mapStateToProps = state => ({
  topNews: state.news.topNews,
});

export default connect(
  mapStateToProps
)(MostViewed1);