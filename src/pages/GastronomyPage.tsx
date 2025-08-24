import React from 'react';
import './GastronomyPage.css';

// Import des images gastronomiques
import couscousImage from '../assets/Plat de couscous traditionnel.jfif';
import brikImage from '../assets/Brik à l\'œuf.jfif';
import saladeMechouiaImage from '../assets/Salade mechouia.jpg';
import makrouthImage from '../assets/makrouth.jpg';

const GastronomyPage: React.FC = () => {
  const gastronomicExperiences = [
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
  ];

  const culinaryTraditions = [
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
  ];

  const cookingExperiences = [
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
  ];

  return (
    <div className="gastronomy-page">
      
      {/* Hero Section */}
      <section className="gastronomy-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Art de Vivre & Gastronomie</h1>
            <p>Découvrez les saveurs authentiques de la cuisine tunisienne, héritage de 3000 ans de tradition culinaire méditerranéenne</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">3000</span>
                <span className="label">ans de tradition</span>
              </div>
              <div className="stat">
                <span className="number">100+</span>
                <span className="label">plats typiques</span>
              </div>
              <div className="stat">
                <span className="number">15</span>
                <span className="label">épices essentielles</span>
              </div>
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
            <h2>Plats Traditionnels Emblématiques</h2>
            <p>Chaque plat raconte l'histoire de notre patrimoine culinaire</p>
          </div>

          <div className="dishes-grid">
            {gastronomicExperiences.map((dish, index) => (
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
                      <span className="detail-label">Temps de préparation:</span>
                      <span className="detail-value">{dish.preparationTime}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Difficulté:</span>
                      <span className="detail-value">{dish.difficulty}</span>
                    </div>
                  </div>

                  <div className="ingredients">
                    <h4>Ingrédients principaux</h4>
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
            <h2>Nos Traditions Culinaires</h2>
            <div className="traditions-grid">
              {culinaryTraditions.map((tradition, index) => (
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
            <h2>Expériences Culinaires</h2>
            <p>Participez à des ateliers authentiques et découvrez nos secrets culinaires</p>
          </div>

          <div className="experiences-grid">
            {cookingExperiences.map((experience, index) => (
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
                <button className="btn-book">Réserver</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GastronomyPage;
