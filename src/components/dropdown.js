import React, { useState } from 'react';
import { menuItems } from './data';
import { Link } from 'react-router-dom';

const DropDown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {menuItems.map((items, index) => {
          return (
            <li key={index}>
              <Link
                className={items.cName}
                to={items.path}
                onClick={() => setClick(false)}
              >
                {items.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DropDown;
