import React from "react";
import { connect } from 'react-redux';
import Link from 'next/link'

const RelatedNews1 = ({ topNews }) => {

  let topNews4 = topNews.slice(0, 4)

  return (
    <div className="related-news">
      <h2>Related Stories</h2>
      <div className="row">
        {topNews4.map((news, index) => (
          <Link href={news.url}>
            <div className="col-3" key={index}>
              <img src={imageUrl(news.image)} />
              <a>{news.title}</a>
            </div>
          </Link>
        ))}
      </div>
    </div >
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
)(RelatedNews1);