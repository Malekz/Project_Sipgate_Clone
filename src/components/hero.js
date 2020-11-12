import React from 'react';
import heroVideo from '../assets/keyvisual_sipgate_1280x1280_black.mp4';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container hero">
      <video
        className="hero-video"
        src={heroVideo}
        playsinline=""
        autoplay="autoplay"
        loop="true"
        muted
        controls
      ></video>
      <div className="hero-content">
        <h1>Die eSIM von sipgate</h1>
        <p>Entdecken Sie die echten Vorteile der eSIM</p>
        <Link to="/" className="btn btn-primary">
          Mehr erfahren
        </Link>
      </div>
    </div>
  );
};

export default Header;
