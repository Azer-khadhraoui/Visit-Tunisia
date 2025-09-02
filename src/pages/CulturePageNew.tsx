import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CulturePage.css';
import { useLanguage } from '../contexts/LanguageContext';

// Import des images
import medinatunis from '../assets/medinatunis.jpg';
import medinakairouan from '../assets/medinakairouan.jpg';
import medinasousse from '../assets/medinasousse.jpg';
import carthage from '../assets/carthage.jpg';
import okba2 from '../assets/okba 2.jpg';
import museebardotunis from '../assets/museebardotunis.jpg';
import medinahammamet from '../assets/medinahammamet.jpg';
import sidisahbi from '../assets/sidisahbi.jpg';

const CulturePage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const translations = {
    fr: {
      heroTitle: "Médinas & Patrimoine",
      heroSubtitle: "Plongez dans 3000 ans d'histoire à travers les médinas, mosquées et sites archéologiques de Tunisie",
      heroStats: [
        { number: "8", label: "Sites UNESCO" },
        { number: "14", label: "Siècles d'histoire" },
        { number: "3", label: "Civilisations" }
      ],
      sitesTitle: "Sites Culturels Incontournables",
      highlightsLabel: "Points forts :",
      learnMoreBtn: "En savoir plus",
      culturalSites: [
        {
          id: 1,
          name: 'Médina de Tunis',
          location: 'Tunis',
          image: medinatunis,
          description: 'Site du patrimoine mondial de l\'UNESCO, la médina de Tunis est un labyrinthe fascinant de ruelles étroites, de souks colorés et d\'architecture islamique exceptionnelle.',
          highlights: ['Mosquée Zitouna', 'Souks traditionnels', 'Palais Dar Lasram', 'Architecture andalouse'],
          unesco: true,
          period: 'VIIe-XVIe siècles'
        },
        {
          id: 2,
          name: 'Grande Mosquée de Kairouan',
          location: 'Kairouan',
          image: okba2,
          description: 'Première mosquée construite au Maghreb et quatrième lieu saint de l\'Islam, la Grande Mosquée de Kairouan est un chef-d\'œuvre architectural.',
          highlights: ['Minaret du IXe siècle', 'Salle de prière', 'Cour à portiques', 'Mihrab historique'],
          unesco: true,
          period: 'VIIe siècle'
        },
        {
          id: 3,
          name: 'Médina de Sousse',
          location: 'Sousse',
          image: medinasousse,
          description: 'Exemple remarquable d\'architecture militaire arabe, avec son ribat et ses fortifications parfaitement conservées.',
          highlights: ['Ribat de Sousse', 'Grande Mosquée', 'Remparts', 'Musée archéologique'],
          unesco: true,
          period: 'IXe siècle'
        },
        {
          id: 4,
          name: 'Site de Carthage',
          location: 'Carthage',
          image: carthage,
          description: 'Vestiges de l\'ancienne cité punique et romaine, témoins de plus de 3000 ans d\'histoire méditerranéenne.',
          highlights: ['Thermes d\'Antonin', 'Tophet', 'Théâtre romain', 'Musée national'],
          unesco: true,
          period: 'IXe siècle av. J.-C.'
        },
        {
          id: 5,
          name: 'Mosquée Sidi Sahbi',
          location: 'Kairouan',
          image: sidisahbi,
          description: 'Également appelée mosquée du Barbier, ce mausolée abrite la tombe d\'Abu Zama el Belaoui, compagnon du Prophète et barbier personnel, d\'où son surnom.',
          highlights: ['Mausolée du Barbier', 'Faïences colorées', 'Architecture ottomane', 'Cour à colonnades'],
          unesco: false,
          period: 'VIIe siècle'
        },
        {
          id: 6,
          name: 'Musée du Bardo',
          location: 'Tunis',
          image: museebardotunis,
          description: 'L\'un des plus importants musées du monde pour les mosaïques romaines, installé dans un ancien palais beylical.',
          highlights: ['Mosaïques romaines', 'Palais du Bardo', 'Art islamique', 'Sculptures antiques'],
          unesco: false,
          period: 'Antiquité romaine'
        }
      ],
      traditionsSection: {
        title: "Traditions Vivantes",
        traditions: [
          {
            title: 'Artisanat Traditionnel',
            description: 'Découvrez les métiers ancestraux tunisiens',
            activities: ['Poterie de Nabeul', 'Tapis de Kairouan', 'Cuivre de Tunis', 'Verre soufflé']
          },
          {
            title: 'Musique et Danse',
            description: 'Traditions musicales séculaires',
            activities: ['Malouf andalou', 'Stambali', 'Mezwed populaire', 'Danse folklorique']
          },
          {
            title: 'Architecture Islamique',
            description: 'Styles architecturaux uniques',
            activities: ['Mosquées historiques', 'Médersas', 'Palais ottomans', 'Maisons traditionnelles']
          }
        ]
      },
      packagesSection: {
        title: "Circuits Culturels",
        includesLabel: "Inclus :",
        bookNowBtn: "Réserver maintenant",
        packages: [
          {
            title: 'Circuit Patrimoine UNESCO',
            duration: '7 jours',
            price: 'À partir de 890€',
            includes: ['Tunis', 'Kairouan', 'Sousse', 'Carthage'],
            description: 'Tour complet des sites UNESCO tunisiens'
          },
          {
            title: 'Médinas et Artisanat',
            duration: '5 jours',
            price: 'À partir de 650€',
            includes: ['Ateliers artisans', 'Souks', 'Musées', 'Rencontres'],
            description: 'Immersion dans l\'artisanat traditionnel'
          },
          {
            title: 'Sur les Traces de Carthage',
            duration: '4 jours',
            price: 'À partir de 520€',
            includes: ['Sites puniques', 'Musées', 'Sidi Bou Saïd', 'Guide expert'],
            description: 'Découverte de l\'héritage carthaginois'
          }
        ]
      },
      tipsSection: {
        title: "Conseils pour Votre Visite",
        tips: [
          {
            icon: "🕐",
            title: "Meilleur Moment",
            description: "Visitez les médinas tôt le matin ou en fin d'après-midi pour éviter les foules et profiter de la lumière dorée."
          },
          {
            icon: "👕",
            title: "Tenue Appropriée",
            description: "Portez des vêtements couvrants et confortables. Chaussures fermées recommandées pour les sites archéologiques."
          },
          {
            icon: "📸",
            title: "Photographie",
            description: "Respectez les interdictions de photos dans certains lieux sacrés. Demandez toujours la permission pour photographier les habitants."
          },
          {
            icon: "🎫",
            title: "Billets Groupés",
            description: "Optez pour les pass multi-sites pour économiser sur les entrées des musées et sites archéologiques."
          }
        ]
      },
      ctaSection: {
        title: "Prêt à Explorer le Patrimoine Tunisien ?",
        subtitle: "Laissez-vous guider à travers les merveilles architecturales et historiques de la Tunisie",
        planTripBtn: "Planifier mon circuit",
        otherExperiencesBtn: "Autres expériences"
      }
    },
    en: {
      heroTitle: "Medinas & Heritage",
      heroSubtitle: "Dive into 3000 years of history through medinas, mosques and archaeological sites of Tunisia",
      heroStats: [
        { number: "8", label: "UNESCO Sites" },
        { number: "14", label: "Centuries of history" },
        { number: "3", label: "Civilizations" }
      ],
      sitesTitle: "Must-See Cultural Sites",
      highlightsLabel: "Highlights:",
      learnMoreBtn: "Learn more",
      culturalSites: [
        {
          id: 1,
          name: 'Tunis Medina',
          location: 'Tunis',
          image: medinatunis,
          description: 'UNESCO World Heritage site, the Tunis medina is a fascinating maze of narrow alleys, colorful souks and exceptional Islamic architecture.',
          highlights: ['Zitouna Mosque', 'Traditional souks', 'Dar Lasram Palace', 'Andalusian architecture'],
          unesco: true,
          period: '7th-16th centuries'
        },
        {
          id: 2,
          name: 'Great Mosque of Kairouan',
          location: 'Kairouan',
          image: okba2,
          description: 'First mosque built in the Maghreb and fourth holy site of Islam, the Great Mosque of Kairouan is an architectural masterpiece.',
          highlights: ['9th century minaret', 'Prayer hall', 'Porticoed courtyard', 'Historic mihrab'],
          unesco: true,
          period: '7th century'
        },
        {
          id: 3,
          name: 'Sousse Medina',
          location: 'Sousse',
          image: medinasousse,
          description: 'Remarkable example of Arab military architecture, with its ribat and perfectly preserved fortifications.',
          highlights: ['Sousse Ribat', 'Great Mosque', 'Ramparts', 'Archaeological museum'],
          unesco: true,
          period: '9th century'
        },
        {
          id: 4,
          name: 'Carthage Site',
          location: 'Carthage',
          image: carthage,
          description: 'Remains of the ancient Punic and Roman city, witnesses to more than 3000 years of Mediterranean history.',
          highlights: ['Antonine Baths', 'Tophet', 'Roman theatre', 'National museum'],
          unesco: true,
          period: '9th century BC'
        },
        {
          id: 5,
          name: 'Sidi Sahbi Mosque',
          location: 'Kairouan',
          image: sidisahbi,
          description: 'Also called the Barber Mosque, this mausoleum houses the tomb of Abu Zama el Belaoui, companion of the Prophet and personal barber, hence its nickname.',
          highlights: ['Barber Mausoleum', 'Colored ceramics', 'Ottoman architecture', 'Columned courtyard'],
          unesco: false,
          period: '7th century'
        },
        {
          id: 6,
          name: 'Bardo Museum',
          location: 'Tunis',
          image: museebardotunis,
          description: 'One of the world\'s most important museums for Roman mosaics, housed in a former beylical palace.',
          highlights: ['Roman mosaics', 'Bardo Palace', 'Islamic art', 'Ancient sculptures'],
          unesco: false,
          period: 'Roman antiquity'
        }
      ],
      traditionsSection: {
        title: "Living Traditions",
        traditions: [
          {
            title: 'Traditional Crafts',
            description: 'Discover ancestral Tunisian crafts',
            activities: ['Nabeul pottery', 'Kairouan carpets', 'Tunis copper', 'Blown glass']
          },
          {
            title: 'Music and Dance',
            description: 'Secular musical traditions',
            activities: ['Andalusian Malouf', 'Stambali', 'Popular Mezwed', 'Folk dance']
          },
          {
            title: 'Islamic Architecture',
            description: 'Unique architectural styles',
            activities: ['Historic mosques', 'Madrasas', 'Ottoman palaces', 'Traditional houses']
          }
        ]
      },
      packagesSection: {
        title: "Cultural Tours",
        includesLabel: "Includes:",
        bookNowBtn: "Book now",
        packages: [
          {
            title: 'UNESCO Heritage Circuit',
            duration: '7 days',
            price: 'From 890€',
            includes: ['Tunis', 'Kairouan', 'Sousse', 'Carthage'],
            description: 'Complete tour of Tunisian UNESCO sites'
          },
          {
            title: 'Medinas and Crafts',
            duration: '5 days',
            price: 'From 650€',
            includes: ['Artisan workshops', 'Souks', 'Museums', 'Meetings'],
            description: 'Immersion in traditional crafts'
          },
          {
            title: 'In the Footsteps of Carthage',
            duration: '4 days',
            price: 'From 520€',
            includes: ['Punic sites', 'Museums', 'Sidi Bou Said', 'Expert guide'],
            description: 'Discovery of Carthaginian heritage'
          }
        ]
      },
      tipsSection: {
        title: "Tips for Your Visit",
        tips: [
          {
            icon: "🕐",
            title: "Best Time",
            description: "Visit medinas early morning or late afternoon to avoid crowds and enjoy golden light."
          },
          {
            icon: "👕",
            title: "Appropriate Attire",
            description: "Wear covering and comfortable clothes. Closed shoes recommended for archaeological sites."
          },
          {
            icon: "📸",
            title: "Photography",
            description: "Respect photo prohibitions in certain sacred places. Always ask permission to photograph locals."
          },
          {
            icon: "🎫",
            title: "Group Tickets",
            description: "Opt for multi-site passes to save on museum and archaeological site entries."
          }
        ]
      },
      ctaSection: {
        title: "Ready to Explore Tunisian Heritage?",
        subtitle: "Let yourself be guided through the architectural and historical wonders of Tunisia",
        planTripBtn: "Plan my tour",
        otherExperiencesBtn: "Other experiences"
      }
    }
  };

  const t = translations[language];

  return (
    <div className="culture-page">
      {/* Hero Section */}
      <section className="culture-hero">
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
            <img src={okba2} alt="Grande Mosquée de Kairouan" />
          </div>
        </div>
      </section>

      {/* Sites Culturels */}
      <section className="cultural-sites section-padding">
        <div className="container">
          <h2>{t.sitesTitle}</h2>
          <div className="sites-grid">
            {t.culturalSites.map((site, index) => (
              <div key={site.id} className="site-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="site-image">
                  <img src={site.image} alt={site.name} />
                  {site.unesco && <div className="unesco-badge">UNESCO</div>}
                  <div className="period-badge">{site.period}</div>
                </div>
                <div className="site-content">
                  <div className="site-header">
                    <h3>{site.name}</h3>
                    <span className="location">📍 {site.location}</span>
                  </div>
                  <p className="site-description">{site.description}</p>
                  <div className="site-highlights">
                    <h4>{t.highlightsLabel}</h4>
                    <ul>
                      {site.highlights.map((highlight, idx) => (
                        <li key={idx}>✦ {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="btn-explore">
                    {t.learnMoreBtn}
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditions Culturelles */}
      <section className="cultural-traditions section-padding bg-light">
        <div className="container">
          <h2>{t.traditionsSection.title}</h2>
          <div className="traditions-grid">
            {t.traditionsSection.traditions.map((tradition, index) => (
              <div key={index} className="tradition-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3>{tradition.title}</h3>
                <p>{tradition.description}</p>
                <div className="tradition-activities">
                  {tradition.activities.map((activity, idx) => (
                    <span key={idx} className="activity-tag">{activity}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Culturels */}
      <section className="cultural-packages section-padding">
        <div className="container">
          <h2>{t.packagesSection.title}</h2>
          <div className="packages-grid">
            {t.packagesSection.packages.map((pkg, index) => (
              <div key={index} className="package-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="package-header">
                  <h3>{pkg.title}</h3>
                  <div className="package-duration">{pkg.duration}</div>
                </div>
                <div className="package-price">{pkg.price}</div>
                <p className="package-description">{pkg.description}</p>
                <div className="package-includes">
                  <h4>{t.packagesSection.includesLabel}</h4>
                  <ul>
                    {pkg.includes.map((item, idx) => (
                      <li key={idx}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <button className="btn btn-primary">{t.packagesSection.bookNowBtn}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils Pratiques */}
      <section className="culture-tips section-padding bg-light">
        <div className="container">
          <h2>{t.tipsSection.title}</h2>
          <div className="tips-grid">
            {t.tipsSection.tips.map((tip, index) => (
              <div key={index} className="tip-card">
                <div className="tip-icon">{tip.icon}</div>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="culture-cta section-padding">
        <div className="container">
          <div className="cta-content">
            <h2>{t.ctaSection.title}</h2>
            <p>{t.ctaSection.subtitle}</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">{t.ctaSection.planTripBtn}</button>
              <button className="btn btn-secondary" onClick={() => navigate('/experiences')}>
                {t.ctaSection.otherExperiencesBtn}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CulturePage;
