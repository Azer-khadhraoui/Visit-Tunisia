import React from 'react';
import './WellnessPage.css';

// Import des images pour bien-être et détente
import centreThalasso from '../assets/Centre de thalasso.jpg';
import hammamTraditionnel from '../assets/Hammam traditionnel.jpg';
import sourcesKorbous from '../assets/Sources thermales de Korbous.jpg';
import spaLuxe from '../assets/Spa de luxe.jpg';
import hammametPlage from '../assets/hammametplage.webp';
import hammamTraditional from '../assets/Hammam traditionnel.jpg';
import marinaHammamet from '../assets/marina hammamet.jpg';

const WellnessPage: React.FC = () => {
  const wellnessExperiences = [
    {
      id: 'thalassotherapie',
      title: 'Centres de Thalassothérapie',
      description: 'Profitez des bienfaits de l\'eau de mer et des algues marines dans nos centres spécialisés de renommée internationale.',
      image: centreThalasso,
      treatments: ['Bains d\'algues', 'Hydrothérapie', 'Massages marins', 'Soins anti-âge'],
      location: 'Hammamet - Sousse',
      duration: '1-7 jours',
      benefits: 'Détente, régénération, bien-être'
    },
    {
      id: 'hammam-traditionnel',
      title: 'Hammams Traditionnels',
      description: 'Découvrez l\'authentique rituel du hammam, tradition millénaire de purification et de détente.',
      image: hammamTraditionnel,
      treatments: ['Gommage au savon noir', 'Massage au gant kessa', 'Masque à l\'argile', 'Relaxation'],
      location: 'Médinas historiques',
      duration: '2-3 heures',
      benefits: 'Purification, relaxation, tradition'
    },
    {
      id: 'sources-thermales',
      title: 'Sources Thermales de Korbous',
      description: 'Eaux thermales naturelles à 50°C aux propriétés thérapeutiques exceptionnelles, face au golfe de Tunis.',
      image: sourcesKorbous,
      treatments: ['Bains thermaux', 'Inhalations', 'Boues thermales', 'Hydrothérapie'],
      location: 'Korbous - Cap Bon',
      duration: '1-3 jours',
      benefits: 'Thérapeutique, rhumatismes, dermatologie'
    },
    {
      id: 'spa-luxe',
      title: 'Spas de Luxe',
      description: 'Expérience wellness haut de gamme dans des établissements 5 étoiles avec soins personnalisés.',
      image: spaLuxe,
      treatments: ['Massages signature', 'Soins visage premium', 'Rituels couples', 'Yoga & méditation'],
      location: 'Hôtels de luxe',
      duration: '2-5 heures',
      benefits: 'Luxe, personnalisé, exclusif'
    },
    {
      id: 'retraite-plage',
      title: 'Retraites Bien-être en Bord de Mer',
      description: 'Combinaison parfaite entre relaxation, yoga et méditation face à la Méditerranée.',
      image: hammametPlage,
      treatments: ['Yoga matinal', 'Méditation', 'Massages plage', 'Nutrition holistique'],
      location: 'Hammamet - Djerba',
      duration: '3-7 jours',
      benefits: 'Équilibre, sérénité, reconnexion'
    },
    {
      id: 'wellness-marin',
      title: 'Wellness Marin',
      description: 'Programmes de bien-être intégrant sports nautiques doux et soins marins.',
      image: marinaHammamet,
      treatments: ['Aqua-fitness', 'Natation thérapeutique', 'Soins aux algues', 'Relaxation marine'],
      location: 'Marinas et ports',
      duration: '1-5 jours',
      benefits: 'Forme, vitalité, harmonie'
    }
  ];

  const wellnessTraditions = [
    {
      icon: '🌊',
      title: 'Thalassothérapie',
      description: 'La Tunisie est pionnière en Méditerranée avec des centres reconnus mondialement depuis les années 1960.'
    },
    {
      icon: '♨️',
      title: 'Thermalisme',
      description: 'Sources chaudes naturelles utilisées depuis l\'époque romaine pour leurs vertus curatives.'
    },
    {
      icon: '🛁',
      title: 'Hammam',
      description: 'Rituel ancestral de purification alliant vapeur, gommage et relaxation dans un cadre traditionnel.'
    },
    {
      icon: '🌿',
      title: 'Aromathérapie',
      description: 'Utilisation d\'huiles essentielles locales : eucalyptus, romarin, jasmin et fleur d\'oranger.'
    }
  ];

  const wellnessPackages = [
    {
      title: 'Cure Thalasso Découverte',
      description: 'Introduction parfaite à la thalassothérapie',
      duration: '3 jours / 2 nuits',
      includes: ['6 soins thalasso', 'Pension complète', 'Consultation médicale'],
      price: 'À partir de 280€'
    },
    {
      title: 'Retraite Bien-être Intégrale',
      description: 'Programme complet corps et esprit',
      duration: '7 jours / 6 nuits',
      includes: ['Yoga quotidien', 'Massages', 'Nutrition', 'Activités mindfulness'],
      price: 'À partir de 650€'
    },
    {
      title: 'Escapade Thermale',
      description: 'Week-end détente aux sources chaudes',
      duration: '2 jours / 1 nuit',
      includes: ['Bains thermaux', 'Massages', 'Hébergement spa'],
      price: 'À partir de 150€'
    },
    {
      title: 'Lune de Miel Wellness',
      description: 'Romance et détente pour couples',
      duration: '5 jours / 4 nuits',
      includes: ['Soins couples', 'Dîners romantiques', 'Suite avec spa privé'],
      price: 'À partir de 890€'
    }
  ];

  return (
    <div className="wellness-page">
      
      {/* Hero Section */}
      <section className="wellness-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Bien-être & Détente</h1>
            <p>Reconnectez-vous avec votre harmonie intérieure dans les plus beaux spas et centres thermaux de Tunisie</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">50+</span>
                <span className="label">centres wellness</span>
              </div>
              <div className="stat">
                <span className="number">2000</span>
                <span className="label">ans de thermalisme</span>
              </div>
              <div className="stat">
                <span className="number">300</span>
                <span className="label">jours de soleil</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={hammamTraditional} alt="Hammam traditionnel" />
          </div>
        </div>
      </section>

      {/* Main Wellness Experiences */}
      <section className="wellness-experiences section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Expériences Bien-être Authentiques</h2>
            <p>Découvrez les traditions tunisiennes de détente et de régénération</p>
          </div>

          <div className="wellness-grid">
            {wellnessExperiences.map((experience, index) => (
              <div 
                key={experience.id}
                className="wellness-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="wellness-image">
                  <img src={experience.image} alt={experience.title} />
                  <div className="wellness-overlay">
                    <span className="location-tag">{experience.location}</span>
                  </div>
                </div>
                
                <div className="wellness-content">
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                  
                  <div className="wellness-details">
                    <div className="detail-row">
                      <span className="detail-label">Durée:</span>
                      <span className="detail-value">{experience.duration}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Bienfaits:</span>
                      <span className="detail-value">{experience.benefits}</span>
                    </div>
                  </div>

                  <div className="wellness-treatments">
                    <h4>Soins inclus</h4>
                    <div className="treatments-list">
                      {experience.treatments.map((treatment, idx) => (
                        <span key={idx} className="treatment-tag">
                          {treatment}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Traditions */}
      <section className="wellness-traditions">
        <div className="container">
          <div className="traditions-content">
            <h2>Nos Traditions de Bien-être</h2>
            <p>Un héritage millénaire au service de votre santé et beauté</p>
            
            <div className="traditions-grid">
              {wellnessTraditions.map((tradition, index) => (
                <div key={index} className="tradition-card">
                  <div className="tradition-icon">{tradition.icon}</div>
                  <h4>{tradition.title}</h4>
                  <p>{tradition.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Packages */}
      <section className="wellness-packages section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Forfaits Bien-être</h2>
            <p>Programmes sur mesure pour votre escapade détente</p>
          </div>

          <div className="packages-grid">
            {wellnessPackages.map((pack, index) => (
              <div key={index} className="package-card">
                <h4>{pack.title}</h4>
                <p>{pack.description}</p>
                <div className="package-duration">{pack.duration}</div>
                <ul className="package-includes">
                  {pack.includes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="package-price">{pack.price}</div>
                <button className="btn-book-wellness">Réserver</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="wellness-tips">
        <div className="container">
          <div className="tips-content">
            <h2>Conseils pour votre Séjour Bien-être</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon">⏰</div>
                <h4>Meilleur Moment</h4>
                <p>Toute l'année, avec une préférence pour les saisons douces (printemps-automne).</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">👕</div>
                <h4>Que Prendre</h4>
                <p>Maillot de bain, peignoir confortable, tenues décontractées et chaussures d'eau.</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">💧</div>
                <h4>Hydratation</h4>
                <p>Buvez beaucoup d'eau, surtout après les soins thermaux et les séances de hammam.</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">📋</div>
                <h4>Consultation</h4>
                <p>Consultation médicale recommandée avant les cures, incluse dans la plupart des centres.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessPage;
