import React, { useEffect, useLayoutEffect } from 'react';
import Parser, { domToReact, htmlToDOM } from 'html-react-parser';
import Adv from './adv'

const news1 = ({ data }) => {

  // componentDidMount(() => {
  //   console.log('componentDidMount')
  // });

  useEffect(() => {
    window.addEventListener('resize', updateImageWidths);
    updateImageWidths();
  }, []);

  let tmp = unescape(data.text);
  let find = tmp.split('<embed id="');

  for (let i = find.length - 1; i--;) {
    let mediaNum = parseInt(find[i + 1].charAt(0));
    if (data.media[mediaNum - 1]) {
      find[i + 1] = '<div class="embed">' + data.media[mediaNum - 1].embed + '</div>' + find[i + 1].substring(5);
    } else {
      find[i + 1] = find[i + 1].substring(5);
    }
  }

  tmp = find.join('');
  find = tmp.split('<image id="');
  for (let i = find.length - 1; i--;) {
    let imageNum = parseInt(find[i + 1].charAt(0));
    if (data.images[imageNum - 1]) {
      find[i + 1] = '<img src="https://data.joornalo.com/news/4/c/' + data.images[imageNum - 1].url + '" />' + find[i + 1].substring(5);
    } else {
      find[i + 1] = find[i + 1].substring(5);
    }
  }

  let modText = Parser(find.join(''));

  const mainImgUrl = 'https://data.joornalo.com/news/4/c/' + data.images[0].url;

  const updateImageWidths = () => {
    //console.log('updateImageWidths********')
    const contentWidth = document.querySelector(".newsContent div").offsetWidth;
    //console.log(contentWidth);
    let embed = document.querySelectorAll('.newsContent .embed iframe')
    for (let x = 0; x < embed.length; x++) {
      embed[x].width = contentWidth;
      //embed[x].height = contentWidth * .5625;
    }
    embed = document.querySelectorAll('.newsContent .embed .twitter-tweet')
    //console.log(embed)
    for (let x = 0; x < embed.length; x++) {
      embed[x].style["width"] = "100%";
    }

  }


  return (
    <div suppressHydrationWarning={true} className="news">
      <h1>{data.title}</h1>
      <img src={mainImgUrl} />
      <div suppressHydrationWarning={true} className="row">
        <div className="col-3">
          <div className="details">
            Details
          </div>
          <Adv />
        </div>
        <div suppressHydrationWarning={true} className="newsContent col-9">
          <div suppressHydrationWarning={true}>{modText}</div>
        </div>
      </div>
    </div>
  )
};

export default news1;
