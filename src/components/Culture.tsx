import React from 'react';
import './Culture.css';

const Culture: React.FC = () => {
  const culturalAspects = [
    {
      title: "Architecture Islamique",
      description: "Mosquées, madrasas et palais aux décors somptueux",
      icon: "🕌",
      details: ["Mosquée Zitouna", "Mosquée de Kairouan", "Palais du Bardo"]
    },
    {
      title: "Artisanat Traditionnel",
      description: "Savoir-faire millénaires transmis de génération en génération",
      icon: "🏺",
      details: ["Poterie de Nabeul", "Tapis de Kairouan", "Bijoux berbères"]
    },
    {
      title: "Gastronomie",
      description: "Saveurs méditerranéennes et épices du désert",
      icon: "🍲",
      details: ["Couscous", "Brik à l'œuf", "Pâtisseries orientales"]
    },
    {
      title: "Musique & Danse",
      description: "Mélodies envoûtantes et rythmes ancestraux",
      icon: "🎵",
      details: ["Malouf", "Mezoued", "Danse du ventre"]
    }
  ];

  return (
    <section className="culture section-padding" id="culture">
      <div className="container">
        <div className="section-header text-center">
          <h2>Patrimoine Culturel</h2>
          <p>Plongez dans la richesse culturelle d'une civilisation millénaire</p>
        </div>

        <div className="culture-content">
          <div className="culture-intro">
            <div className="intro-text fade-in-up">
              <h3>Une Mosaïque de Civilisations</h3>
              <p>
                La Tunisie est le carrefour de trois continents et le témoin de nombreuses civilisations : 
                phénicienne, romaine, byzantine, arabo-musulmane et ottomane. Cette richesse historique 
                se reflète aujourd'hui dans un patrimoine culturel exceptionnel.
              </p>
              <div className="heritage-stats">
                <div className="stat">
                  <span className="stat-number">8</span>
                  <span className="stat-label">Sites UNESCO</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3000</span>
                  <span className="stat-label">Ans d'Histoire</span>
                </div>
                <div className="stat">
                  <span className="stat-number">200</span>
                  <span className="stat-label">Monuments</span>
                </div>
              </div>
            </div>
            
            <div className="intro-visual">
              <div className="cultural-pattern">
                <div className="pattern-element element-1">✦</div>
                <div className="pattern-element element-2">❋</div>
                <div className="pattern-element element-3">✧</div>
                <div className="pattern-element element-4">※</div>
              </div>
            </div>
          </div>

          <div className="culture-grid">
            {culturalAspects.map((aspect, index) => (
              <div 
                key={index} 
                className="culture-card fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="card-icon">
                  {aspect.icon}
                </div>
                <div className="card-content">
                  <h4>{aspect.title}</h4>
                  <p>{aspect.description}</p>
                  <div className="details-list">
                    {aspect.details.map((detail, idx) => (
                      <span key={idx} className="detail-tag">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="culture-highlight">
            <div className="highlight-content">
              <div className="highlight-text">
                <h3>Festival International de Carthage</h3>
                <p>
                  Chaque été, le prestigieux Festival International de Carthage transforme 
                  l'amphithéâtre romain en scène magique accueillant les plus grands artistes 
                  du monde arabe et international.
                </p>
                <a href="#events" className="btn btn-outline">
                  Découvrir les événements
                </a>
              </div>
              <div className="highlight-visual">
                <div className="amphitheater-placeholder">
                  <span className="placeholder-icon">🎭</span>
                  <p>Amphithéâtre de Carthage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
