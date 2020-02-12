import React from "react";
import { connect } from 'react-redux';
import Link from 'next/link'

const MostViewed1 = ({ topNews }) => {
  return (
    <div className="most-viewed">
      <h2>Most Viewed</h2>
      <ul>
        {topNews.map((news, index) => (
          <Link href={news.url} key={index}>
            <li>
              <img src={imageUrl(news.image)} />
              <a>{news.title}</a>
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