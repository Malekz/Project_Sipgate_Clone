import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import styling
import './sass/main.scss';

// import components
import Navbar from './components/navbar';
import Hero from './components/hero.js';
import Products from './components/products';
import NewFeatures from './components/newFeatures';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <Products />
        <NewFeatures />
        <About />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
