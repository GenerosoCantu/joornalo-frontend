import React, { useState, useEffect } from "react";

const Adv2 = (context) => {
  console.log('Adv****************')
  const [msg, setMsg] = useState('---')
  const [id, setId] = useState(null)
  const [first, setFirst] = useState(null)
  const [adsrc, setAdsrc] = useState(null)
  // const [contentWidth, setContentWidth] = useState(0)

  let loaded = false;
  let isIntersecting = false;
  // let banner = ''

  // if (context.params) {
  //   banner = context.params.size;
  // }

  /*
  300x250 - Medium Rectangle - 40%
  728x90 - Leaderboard - 25%
  160x600 - Wide Skyscraper - 12%
  300x600 - Half Page - 5%
  970x250 - Billboard - 1%
  120x600 - Skyscraper

  320x50 - Mobile Leaderboard - 12%
  320x320 - Mobile Full Page Flex - 1%
  320x100 - Large Mobile
  */

  useEffect(() => {
    console.log('useEffect...............................', id)
    if (!id) {
      setId('adv' + Math.round(Math.random() * 100000))
      console.log('setId...............................', id)
    }
    if (!first && id) {
      console.log('first****************************', id)
      setFirst(true)
      const div = document.getElementById(id);
      if (div) {
        // setContentWidth(div.offsetWidth)

        try {
          let observer = new IntersectionObserver((entries, observerChild) => {
            if (!loaded && entries[0].isIntersecting) {
              loaded = true;
              isIntersecting = true;
              observerChild.unobserve(entries[0].target);
              preLoad();
            }
          });
          observer.observe(div);
        } catch (err) {
          safariIssue();
        }
      }
    }

  });

  const safariIssue = () => {
    if (!loaded) {
      loaded = true;
      isIntersecting = true;
      preLoad();
    }
  }

  /*
 300x250 - Medium Rectangle - 40%
 728x90 - Leaderboard - 25%
 160x600 - Wide Skyscraper - 12%
 300x600 - Half Page - 5%
 120x600 - Skyscraper

  970x250 - Billboard - 1%
 */

  const preLoad = () => {
    console.log('Ready to load...............................', id)
    if (isIntersecting) {

      setMsg('Loaded')
      let num = Math.floor(Math.random() * 4)
      let bb = ['a', 'b', 'c', 'd']
      setAdsrc('https://data.joornalo.com/ads/' + context.params.size + bb[num] + '.jpg')
    }
  }

  return (
    <div className='adv eureka' id={id}>
      <img src={adsrc} />
    </div>
  )
}
{/* Ad {banner} ({contentWidth}): {msg} */ }

export default Adv2;