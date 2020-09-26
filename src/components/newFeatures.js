import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const NewFeatures = () => {
  return (
    <section className="features-container">
      <h3>Neues bei sipgate</h3>
      <div className="features-grid">
        <div
          className="features-card"
          style={{
            background:
              'url(https://www.sipgate.de/wp-content/uploads/sim2_refresh.jpg)',
            backgroundPosition: 'top center',
          }}
        >
          <div className="content">
            <h3>
              simquadrat ist <em>eSIM</em>
            </h3>
            <p>
              Deutschlands erste echte Prepaid-eSIM mit Telefonie, Daten und
              Features
            </p>
            <div className="btn-flex">
              <a className="btn btn-primary" href="#">
                Mehr Erfahren
              </a>
              <a className="btn btn-secondary" href="#">
                kostenlos testen
              </a>
            </div>
          </div>
        </div>

        <div
          className="features-card"
          style={{
            background:
              'url(https://www.sipgate.de/wp-content/uploads/sipgate_softphone_news_white.png)',
            backgroundPosition: 'top center',
          }}
        >
          <div className="content font-dark">
            <h3>
              Die Cloud-Telefonanlage mit <em>integriertem Softphone</em>
            </h3>
            <p>
              Telefonieren Sie nicht nur mit Telefon und Handy, sondern jetzt
              auch an jedem Computer – mit dem sipgate Softphone
            </p>
          </div>
          <a className="btn btn-black" href="#">
            Mehr Erfahren
          </a>
        </div>
        <div
          className="features-card"
          style={{
            background:
              'url(https://www.sipgate.de/wp-content/uploads/news-homeoffice.jpg)',
            backgroundPosition: 'top center',
          }}
        >
          <div className="content font-dark">
            <h3>
              Mit dem ganzen Team <br />
              ins <em>Homeoffice</em>
            </h3>
            <p>
              Deutschlands erste echte Prepaid-eSIM mit Telefonie, Daten und
              Features
            </p>
          </div>
          <a className="btn btn-black" href="#">
            Mehr Erfahren
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewFeatures;
