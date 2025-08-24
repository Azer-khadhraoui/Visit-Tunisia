import React from 'react';
import './NaturePage.css';

// Import des images pour nature et découverte
import saharaImage from '../assets/sahara.jpg';
import saharaMatmataImage from '../assets/saharamatmata.jpg';
import oasisChebika from '../assets/oasisdechebika.jpg';
import starWarsSahara from '../assets/starwarssahara.webp';
import tozeurSahara from '../assets/tozeur sahara.jpg';
import villageKsour from '../assets/villagedeksour.jpg';
import parcIchkeul from '../assets/Parc National Ichkeul.jpg';
import sourcesKorbous from '../assets/Sources thermales de Korbous.jpg';
import randonnee from '../assets/Randonnée.jpg';
import friguia from '../assets/friguia.jpg';

const NaturePage: React.FC = () => {
  const natureExperiences = [
    {
      id: 'sahara-adventure',
      title: 'Aventure dans le Sahara',
      description: 'Explorez le plus grand désert chaud du monde avec ses dunes dorées et ses couchers de soleil spectaculaires.',
      image: saharaImage,
      activities: ['Méharée', 'Bivouac sous les étoiles', 'Trekking', 'Photographie'],
      location: 'Douz - Tozeur',
      duration: '2-7 jours',
      difficulty: 'Modéré'
    },
    {
      id: 'matmata-underground',
      title: 'Villages Troglodytes de Matmata',
      description: 'Découvrez les habitations souterraines traditionnelles berbères, décors du film Star Wars.',
      image: saharaMatmataImage,
      activities: ['Visite guidée', 'Nuit chez l\'habitant', 'Artisanat local', 'Cuisine berbère'],
      location: 'Matmata',
      duration: '1-2 jours',
      difficulty: 'Facile'
    },
    {
      id: 'chebika-oasis',
      title: 'Oasis de Montagne de Chebika',
      description: 'Une oasis spectaculaire nichée dans les montagnes, avec ses cascades et sa végétation luxuriante.',
      image: oasisChebika,
      activities: ['Randonnée', 'Baignade naturelle', 'Observation de la faune', 'Relaxation'],
      location: 'Tozeur - Gafsa',
      duration: 'Demi-journée',
      difficulty: 'Facile'
    },
    {
      id: 'starwars-locations',
      title: 'Lieux de Tournage Star Wars',
      description: 'Visitez les décors authentiques des films Star Wars dans le désert tunisien.',
      image: starWarsSahara,
      activities: ['Circuit cinéma', 'Photographie', 'Exploration', 'Histoire du cinéma'],
      location: 'Tozeur - Matmata',
      duration: '1 jour',
      difficulty: 'Facile'
    },
    {
      id: 'tozeur-palmeraie',
      title: 'Palmeraie de Tozeur',
      description: 'Explorez la plus belle palmeraie de Tunisie avec ses 200 000 palmiers dattiers.',
      image: tozeurSahara,
      activities: ['Calèche traditionnelle', 'Dégustation de dattes', 'Artisanat', 'Photographie'],
      location: 'Tozeur',
      duration: 'Demi-journée',
      difficulty: 'Facile'
    },
    {
      id: 'ksour-villages',
      title: 'Villages Fortifiés du Sud',
      description: 'Découvrez les ksour, villages fortifiés berbères témoins d\'une architecture unique.',
      image: villageKsour,
      activities: ['Architecture berbère', 'Histoire locale', 'Artisanat', 'Randonnée culturelle'],
      location: 'Sud tunisien',
      duration: '1-2 jours',
      difficulty: 'Modéré'
    }
  ];

  const naturalParks = [
    {
      id: 'ichkeul',
      title: 'Parc National d\'Ichkeul',
      description: 'Réserve de biosphère UNESCO, paradis des oiseaux migrateurs',
      image: parcIchkeul,
      highlights: ['300 espèces d\'oiseaux', 'Lac salé unique', 'Patrimoine UNESCO', 'Observation ornithologique']
    },
    {
      id: 'korbous',
      title: 'Sources Thermales de Korbous',
      description: 'Sources chaudes naturelles aux propriétés thérapeutiques',
      image: sourcesKorbous,
      highlights: ['Eaux thermales 50°C', 'Bienfaits thérapeutiques', 'Spa naturel', 'Vue sur le golfe']
    },
    {
      id: 'friguia',
      title: 'Parc Animalier Friguia',
      description: 'Plus grand parc zoologique de Tunisie et d\'Afrique du Nord',
      image: friguia,
      highlights: ['500 animaux', '60 espèces', 'Lions d\'Afrique', 'Conservation']
    }
  ];

  const adventureActivities = [
    {
      icon: '🐪',
      title: 'Méharée dans le Désert',
      description: 'Expédition à dos de chameau dans les dunes du Grand Erg Oriental',
      duration: '2-5 jours',
      season: 'Oct-Avr'
    },
    {
      icon: '🏕️',
      title: 'Bivouac sous les Étoiles',
      description: 'Nuit magique dans le désert avec observation astronomique',
      duration: '1-2 nuits',
      season: 'Toute l\'année'
    },
    {
      icon: '🥾',
      title: 'Trekking en Montagne',
      description: 'Randonnées dans les djebels et les oasis de montagne',
      duration: '1-3 jours',
      season: 'Oct-Mai'
    },
    {
      icon: '🦅',
      title: 'Observation Ornithologique',
      description: 'Découverte de la faune aviaire dans les parcs nationaux',
      duration: 'Demi-journée',
      season: 'Nov-Mar'
    },
    {
      icon: '📸',
      title: 'Safari Photo',
      description: 'Capture des paysages uniques et de la faune sauvage',
      duration: '1-2 jours',
      season: 'Toute l\'année'
    },
    {
      icon: '🌟',
      title: 'Astronomie Désertique',
      description: 'Observation des étoiles dans le ciel pur du Sahara',
      duration: '1 nuit',
      season: 'Toute l\'année'
    }
  ];

  return (
    <div className="nature-page">
      
      {/* Hero Section */}
      <section className="nature-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Nature & Découverte</h1>
            <p>Aventures dans le patrimoine naturel de la Tunisie, du Sahara aux oasis verdoyantes</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">17</span>
                <span className="label">Parcs nationaux</span>
              </div>
              <div className="stat">
                <span className="number">3500</span>
                <span className="label">km² de désert</span>
              </div>
              <div className="stat">
                <span className="number">500+</span>
                <span className="label">espèces animales</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={saharaImage} alt="Désert du Sahara" />
          </div>
        </div>
      </section>

      {/* Main Experiences */}
      <section className="nature-experiences section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Expériences Naturelles Uniques</h2>
            <p>Du Sahara aux oasis, découvrez la diversité naturelle exceptionnelle de la Tunisie</p>
          </div>

          <div className="nature-grid">
            {natureExperiences.map((experience, index) => (
              <div 
                key={experience.id}
                className="nature-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="nature-image">
                  <img src={experience.image} alt={experience.title} />
                  <div className="nature-overlay">
                    <span className="location-tag">{experience.location}</span>
                  </div>
                </div>
                
                <div className="nature-content">
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                  
                  <div className="nature-details">
                    <div className="detail-row">
                      <span className="detail-label">Durée:</span>
                      <span className="detail-value">{experience.duration}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Difficulté:</span>
                      <span className="detail-value">{experience.difficulty}</span>
                    </div>
                  </div>

                  <div className="nature-activities">
                    <h4>Activités incluses</h4>
                    <div className="activities-list">
                      {experience.activities.map((activity, idx) => (
                        <span key={idx} className="activity-tag">
                          {activity}
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

      {/* Natural Parks */}
      <section className="natural-parks">
        <div className="container">
          <div className="parks-content">
            <h2>Parcs Naturels & Réserves</h2>
            <p>Espaces protégés pour la conservation de la biodiversité tunisienne</p>
            
            <div className="parks-grid">
              {naturalParks.map((park, index) => (
                <div key={park.id} className="park-card">
                  <div className="park-image">
                    <img src={park.image} alt={park.title} />
                  </div>
                  <div className="park-content">
                    <h4>{park.title}</h4>
                    <p>{park.description}</p>
                    <ul className="park-highlights">
                      {park.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Activities */}
      <section className="adventure-activities section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>Activités d'Aventure</h2>
            <p>Explorez la nature tunisienne à travers des activités passionnantes</p>
          </div>

          <div className="activities-grid">
            {adventureActivities.map((activity, index) => (
              <div key={index} className="activity-card">
                <div className="activity-icon">{activity.icon}</div>
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
                <div className="activity-info">
                  <div className="info-item">
                    <span className="label">Durée:</span>
                    <span className="value">{activity.duration}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Saison:</span>
                    <span className="value">{activity.season}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="nature-tips">
        <div className="container">
          <div className="tips-content">
            <h2>Conseils pour vos Aventures Nature</h2>
            <div className="tips-grid">
              <div className="tip-card">
                <div className="tip-icon">🌡️</div>
                <h4>Climat Désertique</h4>
                <p>Températures extrêmes : 45°C le jour, 5°C la nuit. Préparez-vous en conséquence.</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">🎒</div>
                <h4>Équipement Essentiel</h4>
                <p>Chapeau, lunettes, crème solaire, chaussures fermées et vêtements couvrants.</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">💧</div>
                <h4>Hydratation</h4>
                <p>Buvez régulièrement, minimum 3L d'eau par jour dans le désert.</p>
              </div>
              <div className="tip-card">
                <div className="tip-icon">📅</div>
                <h4>Meilleure Période</h4>
                <p>Octobre à avril pour le désert, toute l'année pour les parcs du nord.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NaturePage;
