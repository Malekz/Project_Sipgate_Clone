import React from 'react';
import heroVideo from '../assets/keyvisual_sipgate_1280x1280_black.mp4';
//import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container hero">
      <video
        loop="loop"
        autoPlay="autoplay"
        playsInline
        className="hero-video"
        src={heroVideo}
        muted
      ></video>
      <div className="hero-content">
        <h1>Die eSim von sipgate</h1>
        <p>
          <strong>Entdecken Sie die echten Vorteile der eSIM</strong>
        </p>
        <a className="btn" href="#">
          Mehr erfahren
        </a>
      </div>
    </div>
  );
};

export default Header;
