import React from 'react';
import { Link } from 'react-router-dom';
import './UsefulInfo.css';

const UsefulInfo: React.FC = () => {
  const infoSections = [
    {
      id: 'visa',
      title: 'Visa & Formalités',
      icon: '📋',
      items: [
        'Passeport valide 6 mois',
        'Visa non requis pour UE (90 jours)',
        'Vaccins recommandés',
        'Assurance voyage conseillée'
      ]
    },
    {
      id: 'transport',
      title: 'Se Déplacer',
      icon: '🚗',
      items: [
        'Location de voiture',
        'Taxis & Louages',
        'Transport en commun',
        'Vols domestiques'
      ]
    },
    {
      id: 'accommodation',
      title: 'Hébergement',
      icon: '🏨',
      items: [
        'Hôtels de luxe',
        'Maisons d\'hôtes',
        'Camping désert',
        'Riads traditionnels'
      ]
    },
    {
      id: 'essentials',
      title: 'À Savoir',
      icon: '💡',
      items: [
        'Monnaie : Dinar tunisien',
        'Langues : Arabe, Français',
        'Religion : Islam',
        'Électricité : 230V'
      ]
    },
    {
      id: 'climate',
      title: 'Climat & Saisons',
      icon: '🌤️',
      items: [
        'Printemps : Mars-Mai',
        'Été : Juin-Août (chaud)',
        'Automne : Sept-Nov',
        'Hiver : Déc-Fév (doux)'
      ]
    },
    {
      id: 'budget',
      title: 'Budget Voyage',
      icon: '💰',
      items: [
        'Économique : 30-50€/jour',
        'Moyen : 50-100€/jour',
        'Luxe : 100€+/jour',
        'Pourboires : 10%'
      ]
    }
  ];

  return (
    <section className="useful-info section-padding" id="infos-pratiques">
      <div className="container">
        <div className="section-header text-center">
          <h2>Informations Pratiques</h2>
          <p>Tout ce que vous devez savoir pour préparer votre voyage en Tunisie</p>
        </div>

        <div className="info-grid">
          {infoSections.map((section, index) => (
            <div 
              key={section.id}
              className="info-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="info-header">
                <div className="info-icon">
                  {section.icon}
                </div>
                <h3>{section.title}</h3>
              </div>
              <div className="info-content">
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="info-bullet">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="emergency-info">
          <h3>Contacts d'Urgence</h3>
          <div className="emergency-grid">
            <div className="emergency-card">
              <span className="emergency-icon">🚨</span>
              <div>
                <h4>Police</h4>
                <p>197</p>
              </div>
            </div>
            <div className="emergency-card">
              <span className="emergency-icon">🚑</span>
              <div>
                <h4>SAMU</h4>
                <p>190</p>
              </div>
            </div>
            <div className="emergency-card">
              <span className="emergency-icon">🚒</span>
              <div>
                <h4>Pompiers</h4>
                <p>198</p>
              </div>
            </div>
            <div className="emergency-card">
              <span className="emergency-icon">🏛️</span>
              <div>
                <h4>Ambassade France</h4>
                <p>+216 71 104 000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="travel-tips">
          <div className="tips-content">
            <div className="tips-left">
              <h3>Conseils de Voyage</h3>
              <div className="tip-item">
                <span className="tip-icon">🌊</span>
                <div>
                  <h4>Meilleure période</h4>
                  <p>Avril-Juin et Septembre-Novembre pour un climat idéal</p>
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">👗</span>
                <div>
                  <h4>Code vestimentaire</h4>
                  <p>Respectueux dans les lieux religieux, décontracté sur les plages</p>
                </div>
              </div>
              <div className="tip-item">
                <span className="tip-icon">🛒</span>
                <div>
                  <h4>Marchandage</h4>
                  <p>Tradition dans les souks, négociez avec le sourire</p>
                </div>
              </div>
            </div>
            <div className="tips-right">
              <div className="download-guides">
                <h4>Guides Pratiques</h4>
                <p>Explorez nos différentes sections pour planifier votre voyage</p>
                <div className="guide-buttons">
                  <Link to="/blog" className="guide-btn">
                    � Guide Transport
                  </Link>
                  <Link to="/destinations" className="guide-btn">
                    🗺️ Toutes Destinations
                  </Link>
                  <Link to="/experiences" className="guide-btn">
                    🎯 Types d'Expériences
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsefulInfo;
