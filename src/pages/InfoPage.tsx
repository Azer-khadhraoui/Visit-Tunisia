import React from 'react';
import UsefulInfo from '../components/UsefulInfo';
import './InfoPage.css';
import flagImage from '../assets/Flag.png';

const InfoPage: React.FC = () => {
  return (
    <div className="info-page">
      <div className="page-header">
        <div className="container">
          <div className="info-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <div className="title-overlay">
              <h1>Informations Pratiques</h1>
              <p>Tout ce que vous devez savoir pour préparer votre voyage en Tunisie</p>
            </div>
          </div>
        </div>
      </div>
      <UsefulInfo />
    </div>
  );
};

export default InfoPage;
