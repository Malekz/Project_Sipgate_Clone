import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
//import { FaTimes } from 'react-icons/fa';
//import { FaBars } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import components
import { navbar } from './menuItems';
import Logo from '../assets/sipgate_white.svg';
//import Dropdown from './dropdown';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      window.scrollY > 0 && mobile ? setHeader(true) : setHeader(false);
    };

    window.addEventListener('scroll', changeBackground);

    console.log(header);
    return () => window.removeEventListener('scroll', changeBackground);
  }, [header, mobile]);

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      window.innerWidth < 1170 ? setMobile(true) : setMobile(false);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
    //width < 1170 ? setMobile(true) : setMobile(false);
  });
  //const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /*
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  */

  return (
    <header className={header || click ? 'header active' : 'header'}>
      <img className="navbar-logo" src={Logo} alt="sipgate logo" />
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navbar.map((item, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  {item.title}
                </Link>
              </li>
            );
          })}

          {mobile ? null : (
            <li className="nav-item">
              <Link to="/" className="nav-links">
                <FaSearch />
              </Link>
            </li>
          )}

          <li className="nav-item">
            <Link to="/" className="btn btn-secondary">
              Login
            </Link>
          </li>
        </ul>
        {mobile ? (
          <>
            <li className="">
              <Link to="/" className="search-link">
                <FaSearch />
              </Link>
            </li>
            <li className="">
              <Link to="/" className="login-link">
                <FaRegUserCircle />
              </Link>
            </li>
          </>
        ) : null}
      </nav>
    </header>
  );
};

export default Navbar;
