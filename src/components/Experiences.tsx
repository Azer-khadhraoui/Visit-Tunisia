import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Experiences.css';

const Experiences: React.FC = () => {
  const navigate = useNavigate();

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
    // Ici on peut ajouter d'autres navigations pour les autres catégories
  };

  const experienceCategories = [
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
      color: 'var(--tunisia-blue)',
      experiences: [
        'Golf face à la mer',
        'Plongée sous-marine',
        'Sports nautiques',
        'Randonnées en montagne'
      ]
    }
  ];

  return (
    <section className="experiences section-padding" id="experiences">
      <div className="container">
        <div className="experiences-grid">
          {experienceCategories.map((category, index) => (
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
                  Explorer
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="experiences-highlight">
          <div className="highlight-content">
            <div className="highlight-left">
              <h3>Qu'est-ce qui vous fait vibrer ?</h3>
              <p>
                Que vous recherchiez la détente sur nos plages dorées, l'aventure dans le désert, 
                la découverte de notre patrimoine millénaire ou les plaisirs de la gastronomie tunisienne, 
                nous avons l'expérience parfaite pour vous.
              </p>
              <div className="highlight-stats">
                <div className="stat">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Expériences</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Destinations</span>
                </div>
                <div className="stat">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
            
            <div className="highlight-right">
              <div className="experience-finder">
                <h4>Trouvez votre expérience idéale</h4>
                <div className="finder-options">
                  <button className="finder-btn active">🏖️ Plages</button>
                  <button className="finder-btn">🕌 Culture</button>
                  <button className="finder-btn">🐪 Aventure</button>
                  <button className="finder-btn">🧘‍♀️ Bien-être</button>
                  <button className="finder-btn">🍲 Gastronomie</button>
                  <button className="finder-btn">⛳ Sports</button>
                </div>
                <button className="btn btn-primary">
                  Planifier mon voyage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
