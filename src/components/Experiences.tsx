import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './Experiences.css';

const Experiences: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const translations = {
    fr: {
      categories: [
        {
          id: 'beach',
          title: 'Plages & Côtes',
          subtitle: 'Vos vacances sur la côte méditerranéenne',
          description: 'Des plages de sable fin aux eaux cristallines',
          icon: '🏖️',
          color: 'var(--tunisia-blue)',
          experiences: [
            'Plages dorées de Hammamet',
            'Côte sauvage du Cap Bon', 
            'Lagunes de Djerba',
            'Thalassothérapie à Sousse'
          ],
          featured: true
        },
        {
          id: 'culture',
          title: 'Médinas & Patrimoine',
          subtitle: 'Immersion dans l\'héritage culturel',
          description: 'Architecture islamique et traditions millénaires',
          icon: '🕌',
          color: 'var(--tunisia-red)',
          experiences: [
            'Médina de Tunis (UNESCO)',
            'Grande Mosquée de Kairouan',
            'Site archéologique de Carthage',
            'Amphithéâtre d\'El Jem'
          ]
        },
        {
          id: 'desert',
          title: 'Nature & Découverte',
          subtitle: 'Aventures dans le patrimoine rural',
          description: 'Du désert aux oasis, paysages à couper le souffle',
          icon: '🐪',
          color: 'var(--tunisia-gold)',
          experiences: [
            'Excursions dans le Sahara',
            'Oasis de montagne de Chebika',
            'Villages berbères authentiques',
            'Nuits sous les étoiles'
          ]
        },
        {
          id: 'wellness',
          title: 'Bien-être & Détente',
          subtitle: 'Escapade revitalisante en Tunisie',
          description: 'Cures thermales, spas et centres de bien-être',
          icon: '🧘‍♀️',
          color: 'var(--tunisia-sunset)',
          experiences: [
            'Centres de thalassothérapie',
            'Sources thermales de Korbous',
            'Hammams traditionnels',
            'Spas de luxe'
          ]
        },
        {
          id: 'gastronomy',
          title: 'Art de Vivre',
          subtitle: 'Gastronomie et traditions tunisiennes',
          description: 'Saveurs authentiques et savoir-faire culinaire',
          icon: '🍲',
          color: 'var(--tunisia-olive)',
          experiences: [
            'Cours de cuisine traditionnelle',
            'Marchés aux épices de Tunis',
            'Dégustations d\'huile d\'olive',
            'Pâtisseries orientales'
          ]
        },
        {
          id: 'sports',
          title: 'Sports & Loisirs',
          subtitle: 'Activités sportives et de loisirs',
          description: 'Golf, plongée et sports nautiques',
          icon: '⛳',
          color: '#1976d2',
          experiences: [
            'Golf face à la mer',
            'Plongée sous-marine',
            'Sports nautiques',
            'Randonnées en montagne'
          ]
        }
      ],
      exploreButton: 'Explorer',
      highlightSection: {
        title: 'Qu\'est-ce qui vous fait vibrer ?',
        description: 'Que vous recherchiez la détente sur nos plages dorées, l\'aventure dans le désert, la découverte de notre patrimoine millénaire ou les plaisirs de la gastronomie tunisienne, nous avons l\'expérience parfaite pour vous.',
        stats: [
          { number: '150+', label: 'Expériences' },
          { number: '50+', label: 'Destinations' },
          { number: '24/7', label: 'Support' }
        ]
      },
      experienceFinder: {
        title: 'Trouvez votre expérience idéale',
        subtitle: 'Découvrez la Tunisie selon vos passions',
        buttons: [
          { id: 'beach', icon: '🏖️', text: 'Plages' },
          { id: 'culture', icon: '🕌', text: 'Culture' },
          { id: 'desert', icon: '🐪', text: 'Aventure' },
          { id: 'wellness', icon: '🧘‍♀️', text: 'Bien-être' },
          { id: 'gastronomy', icon: '🍲', text: 'Gastronomie' },
          { id: 'sports', icon: '⛳', text: 'Sports' }
        ]
      }
    },
    en: {
      categories: [
        {
          id: 'beach',
          title: 'Beaches & Coasts',
          subtitle: 'Your vacation on the Mediterranean coast',
          description: 'From fine sandy beaches to crystal-clear waters',
          icon: '🏖️',
          color: 'var(--tunisia-blue)',
          experiences: [
            'Golden beaches of Hammamet',
            'Wild coast of Cap Bon', 
            'Djerba lagoons',
            'Thalassotherapy in Sousse'
          ],
          featured: true
        },
        {
          id: 'culture',
          title: 'Medinas & Heritage',
          subtitle: 'Immersion in cultural heritage',
          description: 'Islamic architecture and millennial traditions',
          icon: '🕌',
          color: 'var(--tunisia-red)',
          experiences: [
            'Tunis Medina (UNESCO)',
            'Great Mosque of Kairouan',
            'Archaeological site of Carthage',
            'El Jem Amphitheatre'
          ]
        },
        {
          id: 'desert',
          title: 'Nature & Discovery',
          subtitle: 'Adventures in rural heritage',
          description: 'From desert to oases, breathtaking landscapes',
          icon: '🐪',
          color: 'var(--tunisia-gold)',
          experiences: [
            'Sahara expeditions',
            'Chebika mountain oasis',
            'Authentic Berber villages',
            'Nights under the stars'
          ]
        },
        {
          id: 'wellness',
          title: 'Wellness & Relaxation',
          subtitle: 'Revitalizing escape in Tunisia',
          description: 'Thermal cures, spas and wellness centers',
          icon: '🧘‍♀️',
          color: 'var(--tunisia-sunset)',
          experiences: [
            'Thalassotherapy centers',
            'Korbous thermal springs',
            'Traditional hammams',
            'Luxury spas'
          ]
        },
        {
          id: 'gastronomy',
          title: 'Art of Living',
          subtitle: 'Gastronomy and Tunisian traditions',
          description: 'Authentic flavors and culinary know-how',
          icon: '🍲',
          color: 'var(--tunisia-olive)',
          experiences: [
            'Traditional cooking classes',
            'Tunis spice markets',
            'Olive oil tastings',
            'Oriental pastries'
          ]
        },
        {
          id: 'sports',
          title: 'Sports & Leisure',
          subtitle: 'Sports and leisure activities',
          description: 'Golf, diving and water sports',
          icon: '⛳',
          color: '#1976d2',
          experiences: [
            'Golf facing the sea',
            'Scuba diving',
            'Water sports',
            'Mountain hiking'
          ]
        }
      ],
      exploreButton: 'Explore',
      highlightSection: {
        title: 'What makes you vibrate?',
        description: 'Whether you seek relaxation on our golden beaches, adventure in the desert, discovery of our millennial heritage or the pleasures of Tunisian gastronomy, we have the perfect experience for you.',
        stats: [
          { number: '150+', label: 'Experiences' },
          { number: '50+', label: 'Destinations' },
          { number: '24/7', label: 'Support' }
        ]
      },
      experienceFinder: {
        title: 'Find your ideal experience',
        subtitle: 'Discover Tunisia according to your passions',
        buttons: [
          { id: 'beach', icon: '🏖️', text: 'Beaches' },
          { id: 'culture', icon: '🕌', text: 'Culture' },
          { id: 'desert', icon: '🐪', text: 'Adventure' },
          { id: 'wellness', icon: '🧘‍♀️', text: 'Wellness' },
          { id: 'gastronomy', icon: '🍲', text: 'Gastronomy' },
          { id: 'sports', icon: '⛳', text: 'Sports' }
        ]
      }
    }
  };

  const t = translations[language];

  const handleCategoryExplore = (categoryId: string) => {
    if (categoryId === 'beach') {
      navigate('/experiences/plages-cotes');
    } else if (categoryId === 'gastronomy') {
      navigate('/experiences/gastronomie');
    } else if (categoryId === 'desert') {
      navigate('/experiences/nature-decouverte');
    } else if (categoryId === 'wellness') {
      navigate('/experiences/bien-etre');
    } else if (categoryId === 'sports') {
      navigate('/experiences/sports-loisirs');
    } else if (categoryId === 'culture') {
      navigate('/experiences/medinas-patrimoine');
    }
  };

  return (
    <section className="experiences section-padding" id="experiences">
      <div className="container">
        <div className="experiences-grid">
          {t.categories.map((category, index) => (
            <div 
              key={category.id}
              className="experience-category fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-header">
                <div 
                  className="category-icon"
                  style={{ backgroundColor: category.color }}
                >
                  {category.icon}
                </div>
                <div className="category-info">
                  <h3>{category.title}</h3>
                  <h4>{category.subtitle}</h4>
                  <p>{category.description}</p>
                </div>
              </div>
              
              <div className="category-experiences">
                <ul>
                  {category.experiences.map((experience, idx) => (
                    <li key={idx}>
                      <span className="experience-bullet">✦</span>
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="category-cta">
                <button 
                  className="btn-discover"
                  style={{ color: category.color, borderColor: category.color }}
                  onClick={() => handleCategoryExplore(category.id)}
                >
                  {t.exploreButton}
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="experiences-highlight">
          <div className="highlight-content">
            <div className="highlight-left">
              <h3>{t.highlightSection.title}</h3>
              <p>{t.highlightSection.description}</p>
              <div className="highlight-stats">
                {t.highlightSection.stats.map((stat, index) => (
                  <div key={index} className="stat">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="highlight-right">
              <div className="experience-finder">
                <h4>{t.experienceFinder.title}</h4>
                <p>{t.experienceFinder.subtitle}</p>
                <div className="finder-options">
                  {t.experienceFinder.buttons.map((button, index) => (
                    <button 
                      key={button.id}
                      className={`finder-btn ${index === 0 ? 'active' : ''}`}
                      onClick={() => handleCategoryExplore(button.id)}
                    >
                      {button.icon} {button.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
