import React from 'react';
import Destinations from '../components/Destinations';
import './DestinationsPage.css';

const DestinationsPage: React.FC = () => {
  return (
    <div className="destinations-page">
      <div className="page-header">
        <div className="container">
          <h1>Destinations Incontournables</h1>
          <p>Explorez les merveilles de la Tunisie, de la méditerranée au désert</p>
        </div>
      </div>
      <Destinations />
    </div>
  );
};

export default DestinationsPage;
