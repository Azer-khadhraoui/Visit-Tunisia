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
import KairouanPage from './pages/KairouanPage';
import HammametPage from './pages/HammametPage';
import TabarkaPage from './pages/TabarkaPage';
import DjerbaPage from './pages/DjerbaPage';
import TunisPage from './pages/TunisPage';
import BizertePage from './pages/BizertePage';
import MahdiaPage from './pages/MahdiaPage';
import SaharaPage from './pages/SaharaPage';
import SoussePage from './pages/SoussePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/kairouan" element={<KairouanPage />} />
          <Route path="/destinations/hammamet" element={<HammametPage />} />
          <Route path="/destinations/tabarka" element={<TabarkaPage />} />
          <Route path="/destinations/djerba" element={<DjerbaPage />} />
          <Route path="/destinations/sahara" element={<SaharaPage />} />
          <Route path="/destinations/sousse" element={<SoussePage />} />
          <Route path="/destinations/tunis" element={<TunisPage />} />
          <Route path="/destinations/bizerte" element={<BizertePage />} />
          <Route path="/destinations/mahdia" element={<MahdiaPage />} />
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
