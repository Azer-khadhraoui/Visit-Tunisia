import React from 'react';
import './GastronomyPage.css';
import { useLanguage } from '../contexts/LanguageContext';

// Import des images gastronomiques
import couscousImage from '../assets/Plat de couscous traditionnel.jfif';
import brikImage from '../assets/Brik à l\'œuf.jfif';
import saladeMechouiaImage from '../assets/Salade mechouia.jpg';
import makrouthImage from '../assets/makrouth.jpg';

const GastronomyPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Art de Vivre & Gastronomie",
      heroSubtitle: "Découvrez les saveurs authentiques de la cuisine tunisienne, héritage de 3000 ans de tradition culinaire méditerranéenne",
      heroStats: [
        { number: "3000", label: "ans de tradition" },
        { number: "100+", label: "plats typiques" },
        { number: "15", label: "épices essentielles" }
      ],
      dishesTitle: "Plats Traditionnels Emblématiques",
      dishesSubtitle: "Chaque plat raconte l'histoire de notre patrimoine culinaire",
      preparationTimeLabel: "Temps de préparation:",
      difficultyLabel: "Difficulté:",
      ingredientsLabel: "Ingrédients principaux",
      gastronomicExperiences: [
        {
          id: 'couscous-traditionnel',
          title: 'Couscous Traditionnel',
          description: 'Le plat emblématique de la Tunisie, préparé selon les traditions ancestrales avec des légumes frais et des épices authentiques.',
          image: couscousImage,
          ingredients: ['Semoule fine', 'Légumes de saison', 'Agneau ou poisson', 'Épices tunisiennes'],
          region: 'Tout le pays',
          preparationTime: '2-3 heures',
          difficulty: 'Intermédiaire'
        },
        {
          id: 'brik-a-loeuf',
          title: 'Brik à l\'Œuf',
          description: 'Croustillante pâtisserie farcie d\'un œuf, de thon, de câpres et d\'herbes fraîches, symbole de la cuisine de rue tunisienne.',
          image: brikImage,
          ingredients: ['Pâte à brik', 'Œuf frais', 'Thon', 'Câpres', 'Persil'],
          region: 'Nord de la Tunisie',
          preparationTime: '15 minutes',
          difficulty: 'Facile'
        },
        {
          id: 'salade-mechouia',
          title: 'Salade Mechouia',
          description: 'Salade grillée aux saveurs fumées, composée de poivrons, tomates et piments grillés, assaisonnée à l\'huile d\'olive.',
          image: saladeMechouiaImage,
          ingredients: ['Poivrons grillés', 'Tomates grillées', 'Piments', 'Huile d\'olive', 'Ail'],
          region: 'Tout le pays',
          preparationTime: '45 minutes',
          difficulty: 'Facile'
        },
        {
          id: 'makrouth',
          title: 'Makrouth aux Dattes',
          description: 'Délicieuse pâtisserie traditionnelle farcie de dattes et parfumée à la fleur d\'oranger, un incontournable des festivités.',
          image: makrouthImage,
          ingredients: ['Semoule', 'Dattes', 'Fleur d\'oranger', 'Miel', 'Amandes'],
          region: 'Sud tunisien',
          preparationTime: '1 heure',
          difficulty: 'Avancé'
        }
      ],
      traditionsSection: {
        title: "Nos Traditions Culinaires",
        traditions: [
          {
            icon: '🫒',
            title: 'Huile d\'Olive',
            description: 'La Tunisie produit une des meilleures huiles d\'olive au monde, particulièrement dans les régions de Sfax et Kairouan.'
          },
          {
            icon: '🌶️',
            title: 'Épices & Harissa',
            description: 'La harissa, pâte de piments rouges, est l\'âme de la cuisine tunisienne, accompagnée de nombreuses épices orientales.'
          },
          {
            icon: '🐟',
            title: 'Poissons & Fruits de Mer',
            description: 'Grâce à ses 1300 km de côtes, la Tunisie offre une variété exceptionnelle de poissons et fruits de mer frais.'
          },
          {
            icon: '🍯',
            title: 'Pâtisseries Orientales',
            description: 'Baklawa, zlabiya, et autres douceurs orientales parfumées au miel, aux amandes et à la fleur d\'oranger.'
          }
        ]
      },
      experiencesSection: {
        title: "Expériences Culinaires",
        subtitle: "Participez à des ateliers authentiques et découvrez nos secrets culinaires",
        experiences: [
          {
            title: 'Cours de Cuisine à Tunis',
            description: 'Apprenez à préparer le couscous traditionnel et la harissa maison',
            duration: '4 heures',
            price: 'À partir de 80 DT'
          },
          {
            title: 'Visite des Marchés aux Épices',
            description: 'Découverte des souks et sélection des meilleures épices',
            duration: '2 heures',
            price: 'À partir de 40 DT'
          },
          {
            title: 'Dégustation d\'Huile d\'Olive',
            description: 'Visite d\'oliviers et dégustation dans les moulins traditionnels',
            duration: '3 heures',
            price: 'À partir de 60 DT'
          },
          {
            title: 'Atelier Pâtisserie Orientale',
            description: 'Préparation de makrouth, baklawa et autres délices sucrés',
            duration: '3 heures',
            price: 'À partir de 70 DT'
          }
        ]
      }
    },
    en: {
      heroTitle: "Art of Living & Gastronomy",
      heroSubtitle: "Discover the authentic flavors of Tunisian cuisine, heritage of 3000 years of Mediterranean culinary tradition",
      heroStats: [
        { number: "3000", label: "years of tradition" },
        { number: "100+", label: "typical dishes" },
        { number: "15", label: "essential spices" }
      ],
      dishesTitle: "Emblematic Traditional Dishes",
      dishesSubtitle: "Each dish tells the story of our culinary heritage",
      preparationTimeLabel: "Preparation time:",
      difficultyLabel: "Difficulty:",
      ingredientsLabel: "Main ingredients",
      gastronomicExperiences: [
        {
          id: 'couscous-traditionnel',
          title: 'Traditional Couscous',
          description: 'Tunisia\'s emblematic dish, prepared according to ancestral traditions with fresh vegetables and authentic spices.',
          image: couscousImage,
          ingredients: ['Fine semolina', 'Seasonal vegetables', 'Lamb or fish', 'Tunisian spices'],
          region: 'Nationwide',
          preparationTime: '2-3 hours',
          difficulty: 'Intermediate'
        },
        {
          id: 'brik-a-loeuf',
          title: 'Brik with Egg',
          description: 'Crispy pastry filled with egg, tuna, capers and fresh herbs, symbol of Tunisian street food.',
          image: brikImage,
          ingredients: ['Brik pastry', 'Fresh egg', 'Tuna', 'Capers', 'Parsley'],
          region: 'Northern Tunisia',
          preparationTime: '15 minutes',
          difficulty: 'Easy'
        },
        {
          id: 'salade-mechouia',
          title: 'Mechouia Salad',
          description: 'Grilled salad with smoky flavors, composed of grilled peppers, tomatoes and chili peppers, seasoned with olive oil.',
          image: saladeMechouiaImage,
          ingredients: ['Grilled peppers', 'Grilled tomatoes', 'Chili peppers', 'Olive oil', 'Garlic'],
          region: 'Nationwide',
          preparationTime: '45 minutes',
          difficulty: 'Easy'
        },
        {
          id: 'makrouth',
          title: 'Date Makrouth',
          description: 'Delicious traditional pastry filled with dates and flavored with orange blossom, a must-have for festivities.',
          image: makrouthImage,
          ingredients: ['Semolina', 'Dates', 'Orange blossom', 'Honey', 'Almonds'],
          region: 'Southern Tunisia',
          preparationTime: '1 hour',
          difficulty: 'Advanced'
        }
      ],
      traditionsSection: {
        title: "Our Culinary Traditions",
        traditions: [
          {
            icon: '🫒',
            title: 'Olive Oil',
            description: 'Tunisia produces some of the world\'s best olive oil, particularly in the regions of Sfax and Kairouan.'
          },
          {
            icon: '🌶️',
            title: 'Spices & Harissa',
            description: 'Harissa, red chili paste, is the soul of Tunisian cuisine, accompanied by numerous oriental spices.'
          },
          {
            icon: '🐟',
            title: 'Fish & Seafood',
            description: 'Thanks to its 1300 km of coastline, Tunisia offers an exceptional variety of fresh fish and seafood.'
          },
          {
            icon: '🍯',
            title: 'Oriental Pastries',
            description: 'Baklawa, zlabiya, and other oriental sweets flavored with honey, almonds and orange blossom.'
          }
        ]
      },
      experiencesSection: {
        title: "Culinary Experiences",
        subtitle: "Participate in authentic workshops and discover our culinary secrets",
        experiences: [
          {
            title: 'Cooking Class in Tunis',
            description: 'Learn to prepare traditional couscous and homemade harissa',
            duration: '4 hours',
            price: 'From 80 DT'
          },
          {
            title: 'Spice Market Visit',
            description: 'Discovery of souks and selection of the best spices',
            duration: '2 hours',
            price: 'From 40 DT'
          },
          {
            title: 'Olive Oil Tasting',
            description: 'Visit to olive groves and tasting in traditional mills',
            duration: '3 hours',
            price: 'From 60 DT'
          },
          {
            title: 'Oriental Pastry Workshop',
            description: 'Preparation of makrouth, baklawa and other sweet delights',
            duration: '3 hours',
            price: 'From 70 DT'
          }
        ]
      }
    }
  };

  const t = translations[language];

  return (
    <div className="gastronomy-page">
      
      {/* Hero Section */}
      <section className="gastronomy-hero">
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
            <img src={couscousImage} alt="Couscous traditionnel tunisien" />
          </div>
        </div>
      </section>

      {/* Plats Traditionnels */}
      <section className="traditional-dishes section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t.dishesTitle}</h2>
            <p>{t.dishesSubtitle}</p>
          </div>

          <div className="dishes-grid">
            {t.gastronomicExperiences.map((dish, index) => (
              <div 
                key={dish.id}
                className="dish-card fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="dish-image">
                  <img src={dish.image} alt={dish.title} />
                  <div className="dish-overlay">
                    <span className="region-tag">{dish.region}</span>
                  </div>
                </div>
                
                <div className="dish-content">
                  <h3>{dish.title}</h3>
                  <p>{dish.description}</p>
                  
                  <div className="dish-details">
                    <div className="detail-row">
                      <span className="detail-label">{t.preparationTimeLabel}</span>
                      <span className="detail-value">{dish.preparationTime}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">{t.difficultyLabel}</span>
                      <span className="detail-value">{dish.difficulty}</span>
                    </div>
                  </div>

                  <div className="ingredients">
                    <h4>{t.ingredientsLabel}</h4>
                    <div className="ingredients-list">
                      {dish.ingredients.map((ingredient, idx) => (
                        <span key={idx} className="ingredient-tag">
                          {ingredient}
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

      {/* Traditions Culinaires */}
      <section className="culinary-traditions">
        <div className="container">
          <div className="traditions-content">
            <h2>{t.traditionsSection.title}</h2>
            <div className="traditions-grid">
              {t.traditionsSection.traditions.map((tradition, index) => (
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

      {/* Expériences Culinaires */}
      <section className="cooking-experiences section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t.experiencesSection.title}</h2>
            <p>{t.experiencesSection.subtitle}</p>
          </div>

          <div className="experiences-grid">
            {t.experiencesSection.experiences.map((experience, index) => (
              <div key={index} className="experience-card">
                <h4>{experience.title}</h4>
                <p>{experience.description}</p>
                <div className="experience-info">
                  <div className="info-item">
                    <span className="icon">⏱️</span>
                    <span>{experience.duration}</span>
                  </div>
                  <div className="info-item">
                    <span className="icon">💰</span>
                    <span>{experience.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GastronomyPage;
