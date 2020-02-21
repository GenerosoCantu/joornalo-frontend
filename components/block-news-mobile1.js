import React, { useEffect } from 'react';
import Parser, { domToReact, htmlToDOM } from 'html-react-parser';
import Adv from './block-adv'

const news1 = ({ data }) => {

  useEffect(() => {
    updateImageWidths()
    window.addEventListener('resize', updateImageWidths);
  });

  const AdParams = {
    size: '320x50'
  }

  // const modText = Parser(data.text, {
  //   replace: (domNode) => {
  //     if (domNode.name === 'embed') {
  //       return <div className="embed">{Parser(data.media[domNode.attribs.id - 1].embed)}</div>;
  //     }
  //     if (domNode.name === 'image') {
  //       return <img src={Parser('https://data.joornalo.com/news/4/c/' + data.images[domNode.attribs.id - 1].url)} />
  //     }
  //   }
  // });

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

  const modText = Parser(find.join(''));

  const mainImgUrl = 'https://data.joornalo.com/news/4/c/' + data.images[0].url;


  const updateImageWidths = () => {
    const contentWidth = document.querySelector(".newsContent div").offsetWidth;
    //console.log(contentWidth);
    const embed = document.querySelectorAll('.newsContent .embed iframe')
    for (let x = 0; x < embed.length; x++) {
      embed[x].width = contentWidth;
      embed[x].height = contentWidth * .5625;
    }
  }


  return (
    <div className="news">
      <h1>{data.title}</h1>
      <img src={mainImgUrl} />
      <div className="row">
        <div className="col-12">
          <div className="details">
            Details
          </div>
          <Adv params={AdParams} />
        </div>
        <div className="newsContent col-12">
          <div>{modText}</div>
        </div>
      </div>

    </div>
  )
};

export default news1;
