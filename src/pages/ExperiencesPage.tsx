import React from 'react';
import Experiences from '../components/Experiences';
import './ExperiencesPage.css';

const ExperiencesPage: React.FC = () => {
  return (
    <div className="experiences-page">
      <div className="page-header">
        <div className="container">
          <h1>Expériences Uniques</h1>
          <p>Découvrez la Tunisie à travers des expériences authentiques et inoubliables</p>
        </div>
      </div>
      <Experiences />
    </div>
  );
};

export default ExperiencesPage;
