import { useState } from 'react';
import '../css/Header.css';
function Header({ children, bannerID }) {



  return (
    <>
      <div className={`title ${bannerID}`}>

        {children}

      </div>

    </>
  )
}

export default Header;