import React from 'react';
import UsefulInfo from '../components/UsefulInfo';
import './InfoPage.css';

const InfoPage: React.FC = () => {
  return (
    <div className="info-page">
      <div className="page-header">
        <div className="container">
          <h1>Informations Pratiques</h1>
          <p>Tout ce que vous devez savoir pour préparer votre voyage en Tunisie</p>
        </div>
      </div>
      <UsefulInfo />
    </div>
  );
};

export default InfoPage;
