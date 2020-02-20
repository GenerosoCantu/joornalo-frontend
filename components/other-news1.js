import React from "react";
import { connect } from 'react-redux';
import Link from 'next/link'

const OtherNews1 = ({ moreNews }) => {

  if (!moreNews) return null
  return (
    <div className="other-news block">
      <div className="blockheader"><span>Other News</span></div>
      <ul>
        {moreNews.map((news, index) => (
          <Link href={news.url} key={index}>
            <li>
              <a>
                <img src={imageUrl(news.image)} />
                <div>{news.title}</div>
              </a>
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