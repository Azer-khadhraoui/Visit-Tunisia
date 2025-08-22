import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DestinationsPage from './pages/DestinationsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import BlogPage from './pages/BlogPage';
import InfoPage from './pages/InfoPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/infos-pratiques" element={<InfoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
