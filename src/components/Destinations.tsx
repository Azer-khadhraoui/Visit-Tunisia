import React from 'react';
import './Destinations.css';

const Destinations: React.FC = () => {
  const destinations = [
    {
      id: 1,
      name: "Tunis & Carthage",
      description: "Découvrez la capitale et les vestiges de l'antique Carthage",
      highlights: ["Médina de Tunis", "Musée du Bardo", "Sidi Bou Saïd"],
      icon: "🏛️",
      color: "var(--tunisia-blue)"
    },
    {
      id: 2,
      name: "Djerba",
      description: "L'île paradisiaque aux plages de sable fin",
      highlights: ["Plages dorées", "Synagogue de la Ghriba", "Artisanat local"],
      icon: "🏝️",
      color: "var(--tunisia-sunset)"
    },
    {
      id: 3,
      name: "Sahara",
      description: "Aventure dans le plus grand désert du monde",
      highlights: ["Dunes de Erg Chebbi", "Oasis de montagne", "Nuits étoilées"],
      icon: "🐪",
      color: "var(--tunisia-gold)"
    },
    {
      id: 4,
      name: "Hammamet",
      description: "Station balnéaire réputée et jardins luxuriants",
      highlights: ["Médina historique", "Plages méditerranéennes", "Centres de thalasso"],
      icon: "🌊",
      color: "var(--tunisia-red)"
    }
  ];

  return (
    <section className="destinations section-padding" id="destinations">
      <div className="container">
        <div className="section-header text-center">
          <h2>Destinations Incontournables</h2>
          <p>Explorez les merveilles de la Tunisie, de la méditerranée au désert</p>
        </div>

        <div className="destinations-grid">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="destination-card fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card-header">
                <div 
                  className="destination-icon"
                  style={{ backgroundColor: destination.color }}
                >
                  {destination.icon}
                </div>
                <h3>{destination.name}</h3>
              </div>
              
              <div className="card-content">
                <p className="card-description">{destination.description}</p>
                
                <div className="highlights">
                  <h4>À ne pas manquer :</h4>
                  <ul>
                    {destination.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="highlight-bullet">✦</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="card-footer">
                <button className="btn-explore">
                  Explorer
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="destinations-cta text-center">
          <h3>Prêt pour l'aventure ?</h3>
          <p>Planifiez votre voyage sur mesure avec nos experts locaux</p>
          <a href="#contact" className="btn btn-primary">
            Planifier mon voyage
          </a>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
