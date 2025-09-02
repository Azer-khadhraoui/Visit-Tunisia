import React from 'react';
import UsefulInfo from '../components/UsefulInfo';
import './InfoPage.css';
import flagImage from '../assets/Flag.png';
import { useLanguage } from '../contexts/LanguageContext';

const InfoPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      title: "Informations Pratiques",
      subtitle: "Tout ce que vous devez savoir pour préparer votre voyage en Tunisie"
    },
    en: {
      title: "Practical Information",
      subtitle: "Everything you need to know to prepare your trip to Tunisia"
    }
  };

  const t = translations[language];

  return (
    <div className="info-page">
      <div className="page-header">
        <div className="container">
          <div className="info-title-container">
            <img src={flagImage} alt="Tunisian Flag" className="title-flag-bg" />
            <div className="title-overlay">
              <h1>{t.title}</h1>
              <p>{t.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <UsefulInfo />
    </div>
  );
};

export default InfoPage;
