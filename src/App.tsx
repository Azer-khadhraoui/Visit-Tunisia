import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Culture from './components/Culture';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Destinations />
      <Culture />
      <Footer />
    </div>
  );
}

export default App;
