import React from 'react';
import Experiences from '../components/Experiences';
import './ExperiencesPage.css';
import flagImage from '../assets/Flag.png';

const ExperiencesPage: React.FC = () => {
  return (
    <div className="experiences-page">
      <div className="page-header">
        <div className="container">
          <div className="experiences-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <div className="title-overlay">
              <h1>Expériences Uniques</h1>
              <p>Découvrez la Tunisie à travers des expériences authentiques et inoubliables</p>
            </div>
          </div>
        </div>
      </div>
      <Experiences />
    </div>
  );
};

export default ExperiencesPage;
