import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import DestinationsPage from './pages/DestinationsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import BeachesPage from './pages/BeachesPage';
import GastronomyPage from './pages/GastronomyPage';
import NaturePage from './pages/NaturePage';
import WellnessPage from './pages/WellnessPage';
import SportsPage from './pages/SportsPage';
import CulturePage from './pages/CulturePage';
import TransportPage from './pages/TransportPage';
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
    <LanguageProvider>
      <Router>
        <ScrollToTop />
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
          <Route path="/experiences/plages-cotes" element={<BeachesPage />} />
          <Route path="/experiences/gastronomie" element={<GastronomyPage />} />
          <Route path="/experiences/nature-decouverte" element={<NaturePage />} />
          <Route path="/experiences/bien-etre" element={<WellnessPage />} />
          <Route path="/experiences/sports-loisirs" element={<SportsPage />} />
          <Route path="/experiences/medinas-patrimoine" element={<CulturePage />} />
          <Route path="/blog" element={<TransportPage />} />
          <Route path="/infos-pratiques" element={<InfoPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;
