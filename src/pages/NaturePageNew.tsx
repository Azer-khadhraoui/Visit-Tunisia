import React from 'react';
import './NaturePage.css';
import { useLanguage } from '../contexts/LanguageContext';

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
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Nature & Découverte",
      heroSubtitle: "Aventures dans le patrimoine naturel de la Tunisie, du Sahara aux oasis verdoyantes",
      heroStats: [
        { number: "17", label: "Parcs nationaux" },
        { number: "3500", label: "km² de désert" },
        { number: "500+", label: "espèces animales" }
      ],
      experiencesTitle: "Expériences Naturelles Uniques",
      experiencesSubtitle: "Du Sahara aux oasis, découvrez la diversité naturelle exceptionnelle de la Tunisie",
      durationLabel: "Durée:",
      difficultyLabel: "Difficulté:",
      activitiesLabel: "Activités incluses",
      natureExperiences: [
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
      ],
      parksSection: {
        title: "Parcs Naturels & Réserves",
        subtitle: "Espaces protégés pour la conservation de la biodiversité tunisienne",
        parks: [
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
        ]
      },
      adventureSection: {
        title: "Activités d'Aventure",
        subtitle: "Explorez la nature tunisienne à travers des activités passionnantes",
        activities: [
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
        ]
      },
      tipsSection: {
        title: "Conseils pour vos Aventures Nature",
        tips: [
          {
            icon: "🌡️",
            title: "Climat Désertique",
            description: "Températures extrêmes : 45°C le jour, 5°C la nuit. Préparez-vous en conséquence."
          },
          {
            icon: "🎒",
            title: "Équipement Essentiel",
            description: "Chapeau, lunettes, crème solaire, chaussures fermées et vêtements couvrants."
          },
          {
            icon: "💧",
            title: "Hydratation",
            description: "Buvez régulièrement, minimum 3L d'eau par jour dans le désert."
          },
          {
            icon: "📅",
            title: "Meilleure Période",
            description: "Octobre à avril pour le désert, toute l'année pour les parcs du nord."
          }
        ]
      }
    },
    en: {
      heroTitle: "Nature & Discovery",
      heroSubtitle: "Adventures in Tunisia's natural heritage, from the Sahara to verdant oases",
      heroStats: [
        { number: "17", label: "National parks" },
        { number: "3500", label: "km² of desert" },
        { number: "500+", label: "animal species" }
      ],
      experiencesTitle: "Unique Natural Experiences",
      experiencesSubtitle: "From Sahara to oases, discover Tunisia's exceptional natural diversity",
      durationLabel: "Duration:",
      difficultyLabel: "Difficulty:",
      activitiesLabel: "Included activities",
      natureExperiences: [
        {
          id: 'sahara-adventure',
          title: 'Sahara Adventure',
          description: 'Explore the world\'s largest hot desert with its golden dunes and spectacular sunsets.',
          image: saharaImage,
          activities: ['Camel trekking', 'Camping under stars', 'Trekking', 'Photography'],
          location: 'Douz - Tozeur',
          duration: '2-7 days',
          difficulty: 'Moderate'
        },
        {
          id: 'matmata-underground',
          title: 'Matmata Troglodyte Villages',
          description: 'Discover traditional Berber underground dwellings, settings for the Star Wars movie.',
          image: saharaMatmataImage,
          activities: ['Guided tour', 'Homestay night', 'Local crafts', 'Berber cuisine'],
          location: 'Matmata',
          duration: '1-2 days',
          difficulty: 'Easy'
        },
        {
          id: 'chebika-oasis',
          title: 'Chebika Mountain Oasis',
          description: 'A spectacular oasis nestled in the mountains, with its waterfalls and lush vegetation.',
          image: oasisChebika,
          activities: ['Hiking', 'Natural swimming', 'Wildlife watching', 'Relaxation'],
          location: 'Tozeur - Gafsa',
          duration: 'Half day',
          difficulty: 'Easy'
        },
        {
          id: 'starwars-locations',
          title: 'Star Wars Filming Locations',
          description: 'Visit the authentic sets of the Star Wars movies in the Tunisian desert.',
          image: starWarsSahara,
          activities: ['Cinema circuit', 'Photography', 'Exploration', 'Cinema history'],
          location: 'Tozeur - Matmata',
          duration: '1 day',
          difficulty: 'Easy'
        },
        {
          id: 'tozeur-palmeraie',
          title: 'Tozeur Palm Grove',
          description: 'Explore Tunisia\'s most beautiful palm grove with its 200,000 date palm trees.',
          image: tozeurSahara,
          activities: ['Traditional carriage', 'Date tasting', 'Crafts', 'Photography'],
          location: 'Tozeur',
          duration: 'Half day',
          difficulty: 'Easy'
        },
        {
          id: 'ksour-villages',
          title: 'Southern Fortified Villages',
          description: 'Discover the ksour, Berber fortified villages witnessing unique architecture.',
          image: villageKsour,
          activities: ['Berber architecture', 'Local history', 'Crafts', 'Cultural hiking'],
          location: 'Southern Tunisia',
          duration: '1-2 days',
          difficulty: 'Moderate'
        }
      ],
      parksSection: {
        title: "Natural Parks & Reserves",
        subtitle: "Protected spaces for the conservation of Tunisian biodiversity",
        parks: [
          {
            id: 'ichkeul',
            title: 'Ichkeul National Park',
            description: 'UNESCO biosphere reserve, paradise for migratory birds',
            image: parcIchkeul,
            highlights: ['300 bird species', 'Unique salt lake', 'UNESCO heritage', 'Bird watching']
          },
          {
            id: 'korbous',
            title: 'Korbous Thermal Springs',
            description: 'Natural hot springs with therapeutic properties',
            image: sourcesKorbous,
            highlights: ['50°C thermal waters', 'Therapeutic benefits', 'Natural spa', 'Gulf view']
          },
          {
            id: 'friguia',
            title: 'Friguia Animal Park',
            description: 'Largest zoo in Tunisia and North Africa',
            image: friguia,
            highlights: ['500 animals', '60 species', 'African lions', 'Conservation']
          }
        ]
      },
      adventureSection: {
        title: "Adventure Activities",
        subtitle: "Explore Tunisian nature through exciting activities",
        activities: [
          {
            icon: '🐪',
            title: 'Desert Camel Trekking',
            description: 'Camel expedition in the dunes of the Grand Eastern Erg',
            duration: '2-5 days',
            season: 'Oct-Apr'
          },
          {
            icon: '🏕️',
            title: 'Camping under the Stars',
            description: 'Magical night in the desert with astronomical observation',
            duration: '1-2 nights',
            season: 'Year-round'
          },
          {
            icon: '🥾',
            title: 'Mountain Trekking',
            description: 'Hiking in the djebels and mountain oases',
            duration: '1-3 days',
            season: 'Oct-May'
          },
          {
            icon: '🦅',
            title: 'Bird Watching',
            description: 'Discovery of avian fauna in national parks',
            duration: 'Half day',
            season: 'Nov-Mar'
          },
          {
            icon: '📸',
            title: 'Photo Safari',
            description: 'Capture unique landscapes and wildlife',
            duration: '1-2 days',
            season: 'Year-round'
          },
          {
            icon: '🌟',
            title: 'Desert Astronomy',
            description: 'Star observation in the pure Sahara sky',
            duration: '1 night',
            season: 'Year-round'
          }
        ]
      },
      tipsSection: {
        title: "Tips for your Nature Adventures",
        tips: [
          {
            icon: "🌡️",
            title: "Desert Climate",
            description: "Extreme temperatures: 45°C during day, 5°C at night. Prepare accordingly."
          },
          {
            icon: "🎒",
            title: "Essential Equipment",
            description: "Hat, sunglasses, sunscreen, closed shoes and covering clothes."
          },
          {
            icon: "💧",
            title: "Hydration",
            description: "Drink regularly, minimum 3L of water per day in the desert."
          },
          {
            icon: "📅",
            title: "Best Period",
            description: "October to April for desert, year-round for northern parks."
          }
        ]
      }
    }
  };

  const t = translations[language];

  return (
    <div className="nature-page">
      
      {/* Hero Section */}
      <section className="nature-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{t.heroTitle}</h1>
            <p>{t.heroSubtitle}</p>
            <div className="hero-stats">
              {t.heroStats.map((stat, index) => (
                <div key={index} className="stat">
                  <span className="number">{stat.number}</span>
                  <span className="label">{stat.label}</span>
                </div>
              ))}
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
            <h2>{t.experiencesTitle}</h2>
            <p>{t.experiencesSubtitle}</p>
          </div>

          <div className="nature-grid">
            {t.natureExperiences.map((experience, index) => (
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
                      <span className="detail-label">{t.durationLabel}</span>
                      <span className="detail-value">{experience.duration}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">{t.difficultyLabel}</span>
                      <span className="detail-value">{experience.difficulty}</span>
                    </div>
                  </div>

                  <div className="nature-activities">
                    <h4>{t.activitiesLabel}</h4>
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
            <h2>{t.parksSection.title}</h2>
            <p>{t.parksSection.subtitle}</p>
            
            <div className="parks-grid">
              {t.parksSection.parks.map((park, index) => (
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
            <h2>{t.adventureSection.title}</h2>
            <p>{t.adventureSection.subtitle}</p>
          </div>

          <div className="activities-grid">
            {t.adventureSection.activities.map((activity, index) => (
              <div key={index} className="activity-card">
                <div className="activity-icon">{activity.icon}</div>
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
                <div className="activity-info">
                  <div className="info-item">
                    <span className="label">{t.durationLabel}</span>
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
            <h2>{t.tipsSection.title}</h2>
            <div className="tips-grid">
              {t.tipsSection.tips.map((tip, index) => (
                <div key={index} className="tip-card">
                  <div className="tip-icon">{tip.icon}</div>
                  <h4>{tip.title}</h4>
                  <p>{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NaturePage;
