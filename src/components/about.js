import React from 'react';

const About = () => {
  return (
    <section className="about-container">
      <article>
        <h2>
          Wir sind <em>sipgate</em>
        </h2>
        <p>
          sipgate ist kein typischer Telefonieanbieter. Mit 220 Kolleginnen und
          Kollegen arbeiten wir gemeinsam an außergewöhnlichen Festnetz- und
          Mobilfunkprodukten. Mehrere hunderttausend Kunden nutzen unsere
          Services täglich – vom kostenlosen Internet-Telefonanschluss bis zur
          Telefonanlage für Unternehmen. Seit 2004 steht sipgate für Innovation
          und Transparenz.
        </p>
      </article>
      <div className="about-listing">
        <ol>
          <li>
            <h3>
              Alles <em>im Web</em>
            </h3>
            <p>
              Ihre gesamte Telefonie verwalten Sie ganz einfach online in Ihrem
              Browser. Sie können jederzeit und von überall sämtliche Funktionen
              nutzen und alle unsere Services sind monatlich änderbar.
            </p>
          </li>
          <li>
            <h3>
              Alles <em>aus einer Hand</em>
            </h3>
            <p>
              Die besten Produkte sind immer eine Teamleistung. Deswegen machen
              wir von Entwicklung bis Kundenbetreuung alles zusammen und zentral
              im Düsseldorfer Medienhafen.
            </p>
          </li>
          <li>
            <h3>
              Alles <em>anders</em>
            </h3>
            <p>
              Der Blick über den Tellerrand und raus aus der Komfortzone, Dinge
              anders zu machen und dabei stets unsere Kunden in den Mittelpunkt
              zu stellen – das treibt uns an, jeden Tag besser zu werden.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default About;
