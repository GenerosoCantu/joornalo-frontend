import React, { useState, useEffect } from "react";

const Adv = (context) => {
  const [msg, setMsg] = useState('---')
  const [id, setId] = useState(null)

  let loaded = false;
  let isIntersecting = false;

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
    if (!id) {
      setId('adv' + Math.round(Math.random() * 100000))
    }

    const div = document.getElementById(id);
    if (div) {
      const contentWidth = div.offsetWidth

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
  });

  const safariIssue = () => {
    if (!loaded) {
      loaded = true;
      isIntersecting = true;
      preLoad();
    }
  }

  const preLoad = () => {
    if (isIntersecting) {
      console.log('Ready to load...............................')
      setMsg('Loaded')
    }
  }

  return (
    <div className='adv' id={id}>
      Ad: {msg}
    </div>
  )
}

export default Adv;