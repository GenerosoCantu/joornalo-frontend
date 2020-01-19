import React from "react";
import Parser, { domToReact, htmlToDOM } from 'html-react-parser';

const news1 = ({ data }) => {

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
    find[i + 1] = '<div class="embed">' + data.media[mediaNum - 1].embed + '</div>' + find[i + 1].substring(5);
  }

  tmp = find.join();
  find = tmp.split('<image id="');
  for (let i = find.length - 1; i--;) {
    let imageNum = parseInt(find[i + 1].charAt(0));
    find[i + 1] = '<img src="https://data.joornalo.com/news/4/c/' + data.images[imageNum - 1].url + '" />' + find[i + 1].substring(5);
  }

  const modText = Parser(find.join());

  return (
    <div className="news">
      <hr />
      <h1>{data.title}</h1>
      <div>{modText}</div>
    </div>
  )
};

export default news1;
