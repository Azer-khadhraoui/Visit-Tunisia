import React from 'react';
import Destinations from '../components/Destinations';
import './DestinationsPage.css';
import flagImage from '../assets/Flag.png';

const DestinationsPage: React.FC = () => {
  return (
    <div className="destinations-page">
      <div className="page-header">
        <div className="container">
          <div className="destinations-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <div className="title-overlay">
              <h1>Destinations Incontournables</h1>
              <p>Explorez les merveilles de la Tunisie, de la méditerranée au désert</p>
            </div>
          </div>
        </div>
      </div>
      <Destinations showHeader={false} />
    </div>
  );
};

export default DestinationsPage;
