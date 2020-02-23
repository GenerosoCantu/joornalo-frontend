import React from "react";

const headerMobile = ({ data }) => {

  function mobileMenu() {
    console.log('Click!');
  }

  return (
    <div className="mobileHeader">

      <div className="menu" onClick={mobileMenu}></div>

      <div className="logo">
        <a href="/"></a>
      </div>

      <a className="search" href="search"></a>

      {/* <block-menu-mobile show="{{ showMenu }}" menu="[[menu]]"></block-menu-mobile> */}

    </div>
  )
}

export default headerMobile;