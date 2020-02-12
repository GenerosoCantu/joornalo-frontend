import React from "react";
import { connect } from 'react-redux';
import Link from 'next/link'

const OtherNews1 = ({ moreNews }) => {
  return (
    <div className="other-news">
      <h2>Other News</h2>
      <ul>
        {moreNews.map((news, index) => (
          <Link href={news.url} key={index}>
            <li>
              <img src={imageUrl(news.image)} />
              <a>{news.title}</a>
            </li>
          </Link>
        ))}
      </ul>
    </div >
  )
}

const imageUrl = (url) => {
  return 'https://data.joornalo.com' + url;
}

const mapStateToProps = state => ({
  moreNews: state.news.moreNews,
});

export default connect(
  mapStateToProps
)(OtherNews1);