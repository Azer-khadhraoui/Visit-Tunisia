import React from 'react';
import './WellnessPage.css';
import { useLanguage } from '../contexts/LanguageContext';

// Import des images pour bien-être et détente
import centreThalasso from '../assets/Centre de thalasso.jpg';
import hammamTraditionnel from '../assets/Hammam traditionnel.jpg';
import sourcesKorbous from '../assets/Sources thermales de Korbous.jpg';
import spaLuxe from '../assets/Spa de luxe.jpg';
import hammametPlage from '../assets/hammametplage.webp';
import hammamTraditional from '../assets/Hammam traditionnel.jpg';
import marinaHammamet from '../assets/marina hammamet.jpg';

const WellnessPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Bien-être & Détente",
      heroSubtitle: "Reconnectez-vous avec votre harmonie intérieure dans les plus beaux spas et centres thermaux de Tunisie",
      heroStats: [
        { number: "50+", label: "centres wellness" },
        { number: "2000", label: "ans de thermalisme" },
        { number: "300", label: "jours de soleil" }
      ],
      experiencesTitle: "Expériences Bien-être Authentiques",
      experiencesSubtitle: "Découvrez les traditions tunisiennes de détente et de régénération",
      durationLabel: "Durée:",
      benefitsLabel: "Bienfaits:",
      treatmentsLabel: "Soins inclus",
      wellnessExperiences: [
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
      ],
      traditionsSection: {
        title: "Nos Traditions de Bien-être",
        subtitle: "Un héritage millénaire au service de votre santé et beauté",
        traditions: [
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
        ]
      },
      packagesSection: {
        title: "Forfaits Bien-être",
        subtitle: "Programmes sur mesure pour votre escapade détente",
        packages: [
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
        ]
      },
      tipsSection: {
        title: "Conseils pour votre Séjour Bien-être",
        tips: [
          {
            icon: "⏰",
            title: "Meilleur Moment",
            description: "Toute l'année, avec une préférence pour les saisons douces (printemps-automne)."
          },
          {
            icon: "👕",
            title: "Que Prendre",
            description: "Maillot de bain, peignoir confortable, tenues décontractées et chaussures d'eau."
          },
          {
            icon: "💧",
            title: "Hydratation",
            description: "Buvez beaucoup d'eau, surtout après les soins thermaux et les séances de hammam."
          },
          {
            icon: "📋",
            title: "Consultation",
            description: "Consultation médicale recommandée avant les cures, incluse dans la plupart des centres."
          }
        ]
      }
    },
    en: {
      heroTitle: "Wellness & Relaxation",
      heroSubtitle: "Reconnect with your inner harmony in Tunisia's most beautiful spas and thermal centers",
      heroStats: [
        { number: "50+", label: "wellness centers" },
        { number: "2000", label: "years of thermalism" },
        { number: "300", label: "sunny days" }
      ],
      experiencesTitle: "Authentic Wellness Experiences",
      experiencesSubtitle: "Discover Tunisian traditions of relaxation and regeneration",
      durationLabel: "Duration:",
      benefitsLabel: "Benefits:",
      treatmentsLabel: "Treatments included",
      wellnessExperiences: [
        {
          id: 'thalassotherapie',
          title: 'Thalassotherapy Centers',
          description: 'Enjoy the benefits of seawater and marine algae in our internationally renowned specialized centers.',
          image: centreThalasso,
          treatments: ['Algae baths', 'Hydrotherapy', 'Marine massages', 'Anti-aging treatments'],
          location: 'Hammamet - Sousse',
          duration: '1-7 days',
          benefits: 'Relaxation, regeneration, wellness'
        },
        {
          id: 'hammam-traditionnel',
          title: 'Traditional Hammams',
          description: 'Discover the authentic hammam ritual, a thousand-year tradition of purification and relaxation.',
          image: hammamTraditionnel,
          treatments: ['Black soap scrub', 'Kessa glove massage', 'Clay mask', 'Relaxation'],
          location: 'Historic medinas',
          duration: '2-3 hours',
          benefits: 'Purification, relaxation, tradition'
        },
        {
          id: 'sources-thermales',
          title: 'Korbous Thermal Springs',
          description: 'Natural thermal waters at 50°C with exceptional therapeutic properties, facing the Gulf of Tunis.',
          image: sourcesKorbous,
          treatments: ['Thermal baths', 'Inhalations', 'Thermal mud', 'Hydrotherapy'],
          location: 'Korbous - Cap Bon',
          duration: '1-3 days',
          benefits: 'Therapeutic, rheumatism, dermatology'
        },
        {
          id: 'spa-luxe',
          title: 'Luxury Spas',
          description: 'High-end wellness experience in 5-star establishments with personalized treatments.',
          image: spaLuxe,
          treatments: ['Signature massages', 'Premium facial treatments', 'Couple rituals', 'Yoga & meditation'],
          location: 'Luxury hotels',
          duration: '2-5 hours',
          benefits: 'Luxury, personalized, exclusive'
        },
        {
          id: 'retraite-plage',
          title: 'Seaside Wellness Retreats',
          description: 'Perfect combination of relaxation, yoga and meditation facing the Mediterranean.',
          image: hammametPlage,
          treatments: ['Morning yoga', 'Meditation', 'Beach massages', 'Holistic nutrition'],
          location: 'Hammamet - Djerba',
          duration: '3-7 days',
          benefits: 'Balance, serenity, reconnection'
        },
        {
          id: 'wellness-marin',
          title: 'Marine Wellness',
          description: 'Wellness programs integrating gentle water sports and marine treatments.',
          image: marinaHammamet,
          treatments: ['Aqua-fitness', 'Therapeutic swimming', 'Algae treatments', 'Marine relaxation'],
          location: 'Marinas and ports',
          duration: '1-5 days',
          benefits: 'Fitness, vitality, harmony'
        }
      ],
      traditionsSection: {
        title: "Our Wellness Traditions",
        subtitle: "A millennial heritage serving your health and beauty",
        traditions: [
          {
            icon: '🌊',
            title: 'Thalassotherapy',
            description: 'Tunisia is a pioneer in the Mediterranean with centers recognized worldwide since the 1960s.'
          },
          {
            icon: '♨️',
            title: 'Thermalism',
            description: 'Natural hot springs used since Roman times for their healing virtues.'
          },
          {
            icon: '🛁',
            title: 'Hammam',
            description: 'Ancestral purification ritual combining steam, scrubbing and relaxation in a traditional setting.'
          },
          {
            icon: '🌿',
            title: 'Aromatherapy',
            description: 'Use of local essential oils: eucalyptus, rosemary, jasmine and orange blossom.'
          }
        ]
      },
      packagesSection: {
        title: "Wellness Packages",
        subtitle: "Tailor-made programs for your relaxation getaway",
        packages: [
          {
            title: 'Discovery Thalasso Cure',
            description: 'Perfect introduction to thalassotherapy',
            duration: '3 days / 2 nights',
            includes: ['6 thalasso treatments', 'Full board', 'Medical consultation'],
            price: 'From 280€'
          },
          {
            title: 'Integral Wellness Retreat',
            description: 'Complete body and mind program',
            duration: '7 days / 6 nights',
            includes: ['Daily yoga', 'Massages', 'Nutrition', 'Mindfulness activities'],
            price: 'From 650€'
          },
          {
            title: 'Thermal Getaway',
            description: 'Relaxing weekend at hot springs',
            duration: '2 days / 1 night',
            includes: ['Thermal baths', 'Massages', 'Spa accommodation'],
            price: 'From 150€'
          },
          {
            title: 'Wellness Honeymoon',
            description: 'Romance and relaxation for couples',
            duration: '5 days / 4 nights',
            includes: ['Couple treatments', 'Romantic dinners', 'Suite with private spa'],
            price: 'From 890€'
          }
        ]
      },
      tipsSection: {
        title: "Tips for your Wellness Stay",
        tips: [
          {
            icon: "⏰",
            title: "Best Time",
            description: "Year-round, with a preference for mild seasons (spring-autumn)."
          },
          {
            icon: "👕",
            title: "What to Bring",
            description: "Swimsuit, comfortable bathrobe, casual clothes and water shoes."
          },
          {
            icon: "💧",
            title: "Hydration",
            description: "Drink plenty of water, especially after thermal treatments and hammam sessions."
          },
          {
            icon: "📋",
            title: "Consultation",
            description: "Medical consultation recommended before treatments, included in most centers."
          }
        ]
      }
    }
  };

  const t = translations[language];

  return (
    <div className="wellness-page">
      
      {/* Hero Section */}
      <section className="wellness-hero">
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
            <img src={hammamTraditional} alt="Hammam traditionnel" />
          </div>
        </div>
      </section>

      {/* Main Wellness Experiences */}
      <section className="wellness-experiences section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t.experiencesTitle}</h2>
            <p>{t.experiencesSubtitle}</p>
          </div>

          <div className="wellness-grid">
            {t.wellnessExperiences.map((experience, index) => (
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
                      <span className="detail-label">{t.durationLabel}</span>
                      <span className="detail-value">{experience.duration}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">{t.benefitsLabel}</span>
                      <span className="detail-value">{experience.benefits}</span>
                    </div>
                  </div>

                  <div className="wellness-treatments">
                    <h4>{t.treatmentsLabel}</h4>
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
            <h2>{t.traditionsSection.title}</h2>
            <p>{t.traditionsSection.subtitle}</p>
            
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

      {/* Wellness Packages */}
      <section className="wellness-packages section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2>{t.packagesSection.title}</h2>
            <p>{t.packagesSection.subtitle}</p>
          </div>

          <div className="packages-grid">
            {t.packagesSection.packages.map((pack, index) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="wellness-tips">
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

export default WellnessPage;
