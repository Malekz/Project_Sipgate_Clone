import React from 'react';
//import { AiOutlineArrowRight } from 'react-icons/ai';

import firstImage from '../assets/stage-product-icons-basic.svg';
import secondImage from '../assets/stage-product-icons-simquadrat.svg';
import thirdImage from '../assets/stage-product-icons-team.svg';
import fourthImage from '../assets/stage-product-icons-teammobil.svg';
import fifthImage from '../assets/stage-product-icons-trunking.svg';
import sixthImage from '../assets/stage-product-icons-io.svg';

const Products = () => {
  return (
    <section className="products-containeer">
      <h3>Telefonie für zu Hause, unterwegs und das Büro</h3>
      <div className="card-container">
        <figure className="card">
          <div className="card__image-holder">
            <img src={firstImage} alt="mobile" />
          </div>
          <figcaption>
            <div className="card-title">
              <h3>
                Der Kostenlose <br /> Telefonanschluss
              </h3>
            </div>
          </figcaption>
          <a href="#" className="card-link">
            sipgate basic
          </a>
        </figure>

        <figure className="card">
          <div className="card__image-holder">
            <img src={secondImage} alt="mobile" />
          </div>
          <figcaption>
            <div className="card-title">
              <h3>
                Der Kostenlose <br /> Telefonanschluss
              </h3>
            </div>
          </figcaption>
          <a href="#" className="card-link">
            sipgate basic
          </a>
        </figure>

        <figure className="card">
          <div className="card__image-holder">
            <img src={thirdImage} alt="mobile" />
          </div>
          <figcaption>
            <div className="card-title">
              <h3>
                Der Kostenlose <br /> Telefonanschluss
              </h3>
            </div>
          </figcaption>
          <a href="#" className="card-link">
            sipgate basic
          </a>
        </figure>

        <figure className="card">
          <div className="card__image-holder">
            <img src={fourthImage} alt="mobile" />
          </div>
          <figcaption>
            <div className="card-title">
              <h3>
                Der Kostenlose <br /> Telefonanschluss
              </h3>
            </div>
          </figcaption>
          <a href="#" className="card-link">
            sipgate basic
          </a>
        </figure>

        <figure className="card">
          <div className="card__image-holder">
            <img src={fifthImage} alt="mobile" />
          </div>
          <figcaption>
            <div className="card-title">
              <h3>
                Der Kostenlose <br /> Telefonanschluss
              </h3>
            </div>
          </figcaption>
          <a href="#" className="card-link">
            sipgate basic
          </a>
        </figure>

        <figure className="card">
          <div className="card__image-holder">
            <img src={sixthImage} alt="mobile" />
          </div>
          <figcaption>
            <div className="card-title">
              <h3>
                Der Kostenlose <br /> Telefonanschluss
              </h3>
            </div>
          </figcaption>
          <a href="#" className="card-link">
            sipgate basic
          </a>
        </figure>
      </div>
    </section>
  );
};

export default Products;
