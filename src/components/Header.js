import React, { useEffect, useState } from 'react';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const handleScroll = () => {
        if (window.scrollY >= 30) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      const logoSrc = scrolling ? 'logo-dark.png' : 'ntwistlight.png'; 

      const headerStyle = {
        backgroundColor: scrolling ? 'white' : '',
        color: scrolling ? 'black' : 'white',
      };
    
  return (
    <div className='header-bar' style={headerStyle}>
        <div className="nav">
            <div className="logo">
                <img src={logoSrc} alt="logo" />
            </div>
            <div className="nav-menu">
                <ul className='nav-bar'>
                    <li>Home</li>
                    <li>industries</li>
                    <li>AI Software</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header