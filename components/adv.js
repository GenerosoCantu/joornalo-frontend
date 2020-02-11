import React, { useState, useEffect } from "react";

const Adv = (context) => {
  const [msg, setMsg] = useState('---')
  const [id, setId] = useState(null)

  let loaded = false;
  let isIntersecting = false;

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