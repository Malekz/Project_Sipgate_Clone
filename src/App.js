import React from 'react';

// import styling
import './sass/main.scss';

// import components
import Navbar from './components/navbar';
import Header from './components/header';
import Features from './components/features';
import NewFeatures from './components/newFeatures';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <NewFeatures />
      <About />
      <Footer />
    </div>
  );
}

export default App;
