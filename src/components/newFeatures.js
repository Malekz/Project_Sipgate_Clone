import React from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/" className="btn btn-primary">
                Mehr Erfahren
              </Link>
              <Link to="/" className="btn btn-secondary">
                kostenlos testen
              </Link>
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
          <Link to="/" className="btn btn-black">
            Mehr Erfahren
          </Link>
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
          <Link to="/" className="btn btn-black">
            Mehr Erfahren
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewFeatures;
