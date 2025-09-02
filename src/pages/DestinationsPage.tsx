import React from 'react';
import Destinations from '../components/Destinations';
import './DestinationsPage.css';
import { useLanguage } from '../contexts/LanguageContext';
import flagImage from '../assets/Flag.png';

const DestinationsPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      title: "Destinations Incontournables",
      subtitle: "Explorez les merveilles de la Tunisie, de la méditerranée au désert"
    },
    en: {
      title: "Must-See Destinations",
      subtitle: "Explore the wonders of Tunisia, from the Mediterranean to the desert"
    }
  };

  const t = translations[language];

  return (
    <div className="destinations-page">
      <div className="page-header">
        <div className="container">
          <div className="destinations-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <div className="title-overlay">
              <h1>{t.title}</h1>
              <p>{t.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <Destinations showHeader={false} />
    </div>
  );
};

export default DestinationsPage;
