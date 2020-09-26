//import React from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/sipgate_white.svg';
import Accordion from './accordion';
import { footerApi } from './data';
const Footer = () => {
  //const [accordion, setAccordion] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-container">
        {footerApi.map((item, index) => {
          return (
            <Accordion className="grid" title={item.title} key={index}>
              {item.listing.map((item, index) => {
                return (
                  <li className="accordion-text" key={index}>
                    <Link className="accordion-link" to="/">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </Accordion>
          );
        })}
      </div>
      <hr />
      <div className="footer-bottom">
        <Link to="/">
          <img className="footer-logo" src={Logo} alt="sipgate logo" />
        </Link>

        <ul className="footer-bottom-flex">
          <li>Presse</li>
          <li>Kontakt</li>
          <li>Glossar</li>
          <li>Status</li>
        </ul>
      </div>

      <small className="copyright">
        * Alle Preise inkl. MwSt. | &#169; 2020 sipgate GmbH
      </small>
    </footer>
  );
};

export default Footer;
