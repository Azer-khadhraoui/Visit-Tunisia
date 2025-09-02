import React from 'react';
import Experiences from '../components/Experiences';
import './ExperiencesPage.css';
import { useLanguage } from '../contexts/LanguageContext';
import flagImage from '../assets/Flag.png';

const ExperiencesPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      title: "Expériences Uniques",
      subtitle: "Découvrez la Tunisie à travers des expériences authentiques et inoubliables"
    },
    en: {
      title: "Unique Experiences",
      subtitle: "Discover Tunisia through authentic and unforgettable experiences"
    }
  };

  const t = translations[language];

  return (
    <div className="experiences-page">
      <div className="page-header">
        <div className="container">
          <div className="experiences-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <div className="title-overlay">
              <h1>{t.title}</h1>
              <p>{t.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <Experiences />
    </div>
  );
};

export default ExperiencesPage;
