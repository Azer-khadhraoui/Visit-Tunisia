import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './BizertePage.css';
// @ts-ignore
import heroImage from '../assets/vieuportbizerte.webp';
// @ts-ignore
import vieuxPortImage from '../assets/vieuportbizerte.webp';
// @ts-ignore
import forteEspagneImage from '../assets/bridgebizerte.jpg';
// @ts-ignore
import lacImage from '../assets/coucoubeachbizerte.webp';
// @ts-ignore
import corniImage from '../assets/bizertemedina.jpg';
import flagImage from '../assets/Flag.png';

const BizertePage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      title: "Bizerte",
      subtitle: "Perle du nord tunisien",
      attractionsTitle: "Sites Incontournables",
      attractionsSubtitle: "Entre patrimoine maritime et beautés naturelles",
      practicalInfoTitle: "Informations Pratiques",
      accommodationTitle: "Hébergement",
      ctaTitle: "Explorez la perle du nord",
      ctaSubtitle: "Découvrez Bizerte, entre authenticité maritime et splendeurs naturelles",
      bookingButton: "Réserver votre séjour",
      destinationsButton: "Autres destinations",
      highlights: "Points forts :",
      access: "Accès",
      visits: "Visites",
      activities: "Activités",
      gastronomy: "Gastronomie"
    },
    en: {
      title: "Bizerte",
      subtitle: "Pearl of Northern Tunisia",
      attractionsTitle: "Must-See Sites",
      attractionsSubtitle: "Between maritime heritage and natural beauty",
      practicalInfoTitle: "Practical Information",
      accommodationTitle: "Accommodation",
      ctaTitle: "Explore the pearl of the north",
      ctaSubtitle: "Discover Bizerte, between maritime authenticity and natural splendors",
      bookingButton: "Book your stay",
      destinationsButton: "Other destinations",
      highlights: "Highlights:",
      access: "Access",
      visits: "Visits",
      activities: "Activities",
      gastronomy: "Gastronomy"
    }
  };

  const attractions = [
    {
      name: {
        fr: "Vieux Port de Bizerte",
        en: "Old Port of Bizerte"
      },
      description: {
        fr: "Cœur historique de la ville, le vieux port de Bizerte séduit par son authenticité. Bordé de maisons traditionnelles et de petits cafés, c'est le lieu idéal pour observer les pêcheurs rentrer avec leur prise quotidienne.",
        en: "The historic heart of the city, Bizerte's old port captivates with its authenticity. Lined with traditional houses and small cafés, it's the ideal place to watch fishermen return with their daily catch."
      },
      image: vieuxPortImage,
      highlights: {
        fr: ["Bateaux de pêche traditionnels", "Architecture andalouse", "Cafés du port", "Marché aux poissons"],
        en: ["Traditional fishing boats", "Andalusian architecture", "Port cafés", "Fish market"]
      }
    },
    {
      name: {
        fr: "Pont Mobile de Bizerte",
        en: "Bizerte Mobile Bridge"
      },
      description: {
        fr: "Emblème de la ville, ce pont historique relie la vieille ville au quartier moderne. Monument technique remarquable, il s'ouvre pour laisser passer les bateaux entre le lac et la mer.",
        en: "Emblem of the city, this historic bridge connects the old town to the modern quarter. A remarkable technical monument, it opens to let boats pass between the lake and the sea."
      },
      image: forteEspagneImage,
      highlights: {
        fr: ["Monument historique", "Ingénierie unique", "Vue panoramique", "Liaison ville-port"],
        en: ["Historic monument", "Unique engineering", "Panoramic view", "City-port connection"]
      }
    },
    {
      name: {
        fr: "Plage de Coucou",
        en: "Coucou Beach"
      },
      description: {
        fr: "Magnifique plage de sable fin située près du centre-ville, la plage de Coucou offre des eaux cristallines et une vue imprenable sur la côte méditerranéenne de Bizerte.",
        en: "Beautiful fine sand beach located near the city center, Coucou Beach offers crystal-clear waters and breathtaking views of Bizerte's Mediterranean coast."
      },
      image: lacImage,
      highlights: {
        fr: ["Sable fin doré", "Eaux cristallines", "Proximité centre-ville", "Activités nautiques"],
        en: ["Golden fine sand", "Crystal-clear waters", "Near city center", "Water activities"]
      }
    },
    {
      name: {
        fr: "Médina de Bizerte",
        en: "Bizerte Medina"
      },
      description: {
        fr: "Centre historique authentique de Bizerte, la médina préserve l'architecture traditionnelle tunisienne avec ses ruelles étroites, ses souks colorés et ses monuments anciens.",
        en: "Authentic historic center of Bizerte, the medina preserves traditional Tunisian architecture with its narrow alleys, colorful souks and ancient monuments."
      },
      image: corniImage,
      highlights: {
        fr: ["Architecture traditionnelle", "Souks authentiques", "Monuments historiques", "Artisanat local"],
        en: ["Traditional architecture", "Authentic souks", "Historic monuments", "Local crafts"]
      }
    }
  ];

  return (
    <div className="bizerte-page">
      {/* Hero Section */}
      <div className="page-header">
        <div className="container">
          <div className="bizerte-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <img src={heroImage} alt="Bizerte - Perle du Nord" className="title-hero-img" />
            <div className="title-overlay">
              <h1>{translations[language].title}</h1>
              <p>{translations[language].subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Attractions Section */}
      <section className="attractions-section">
        <div className="container">
          <div className="section-header">
            <h2>{translations[language].attractionsTitle}</h2>
            <p>{translations[language].attractionsSubtitle}</p>
          </div>

          <div className="attractions-grid">
            {attractions.map((attraction, index) => (
              <div key={index} className="attraction-card">
                <div className="attraction-image">
                  <img src={attraction.image} alt={attraction.name[language]} />
                  <div className="attraction-overlay">
                    <h3>{attraction.name[language]}</h3>
                  </div>
                </div>
                <div className="attraction-content">
                  <p>{attraction.description[language]}</p>
                  <div className="highlights">
                    <h4>{translations[language].highlights}</h4>
                    <ul>
                      {attraction.highlights[language].map((highlight, idx) => (
                        <li key={idx}>✦ {highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info Section */}
      <section className="practical-info">
        <div className="container">
          <h2>{translations[language].practicalInfoTitle}</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🚗</div>
              <h3>{translations[language].access}</h3>
              <ul>
                {language === 'fr' ? (
                  <>
                    <li>65 km de Tunis (1h en voiture)</li>
                    <li>Liaison ferroviaire depuis Tunis</li>
                    <li>Bus réguliers SNTRI</li>
                    <li>Aéroport de Tunis-Carthage</li>
                  </>
                ) : (
                  <>
                    <li>65 km from Tunis (1h by car)</li>
                    <li>Rail connection from Tunis</li>
                    <li>Regular SNTRI buses</li>
                    <li>Tunis-Carthage Airport</li>
                  </>
                )}
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🎫</div>
              <h3>{translations[language].visits}</h3>
              <ul>
                {language === 'fr' ? (
                  <>
                    <li>Fort d'Espagne : 5 DT</li>
                    <li>Vieux port : accès libre</li>
                    <li>Tour du lac : gratuit</li>
                    <li>Musée naval : 3 DT</li>
                  </>
                ) : (
                  <>
                    <li>Spanish Fort: 5 DT</li>
                    <li>Old port: free access</li>
                    <li>Lake tour: free</li>
                    <li>Naval museum: 3 DT</li>
                  </>
                )}
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🏖️</div>
              <h3>{translations[language].activities}</h3>
              <ul>
                {language === 'fr' ? (
                  <>
                    <li>Baignade et bronzage</li>
                    <li>Sports nautiques</li>
                    <li>Pêche en mer</li>
                    <li>Randonnée autour du lac</li>
                  </>
                ) : (
                  <>
                    <li>Swimming and sunbathing</li>
                    <li>Water sports</li>
                    <li>Sea fishing</li>
                    <li>Hiking around the lake</li>
                  </>
                )}
              </ul>
            </div>

            <div className="info-card">
              <div className="info-icon">🍽️</div>
              <h3>{translations[language].gastronomy}</h3>
              <ul>
                {language === 'fr' ? (
                  <>
                    <li>Restaurants du vieux port</li>
                    <li>Spécialités : poissons grillés</li>
                    <li>Couscous aux fruits de mer</li>
                    <li>Cafés traditionnels</li>
                  </>
                ) : (
                  <>
                    <li>Old port restaurants</li>
                    <li>Specialties: grilled fish</li>
                    <li>Seafood couscous</li>
                    <li>Traditional cafés</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="accommodation">
        <div className="container">
          <h2>{translations[language].accommodationTitle}</h2>
          <div className="accommodation-grid">
            <div className="accommodation-card">
              <h3>{language === 'fr' ? 'Hôtels vue mer' : 'Sea View Hotels'}</h3>
              <p>
                {language === 'fr' 
                  ? 'Établissements modernes avec vue sur la Méditerranée et accès direct aux plages'
                  : 'Modern establishments with Mediterranean views and direct beach access'
                }
              </p>
              <ul>
                {language === 'fr' ? (
                  <>
                    <li>Villa Didon (luxe)</li>
                    <li>Hôtels corniche</li>
                    <li>Résidences balnéaires</li>
                  </>
                ) : (
                  <>
                    <li>Villa Didon (luxury)</li>
                    <li>Corniche hotels</li>
                    <li>Seaside residences</li>
                  </>
                )}
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>{language === 'fr' ? "Maisons d'hôtes" : 'Guest Houses'}</h3>
              <p>
                {language === 'fr'
                  ? 'Hébergements authentiques dans le centre historique près du vieux port'
                  : 'Authentic accommodations in the historic center near the old port'
                }
              </p>
              <ul>
                {language === 'fr' ? (
                  <>
                    <li>Dar Bizerte</li>
                    <li>Maisons traditionnelles</li>
                    <li>Chambres chez l'habitant</li>
                  </>
                ) : (
                  <>
                    <li>Dar Bizerte</li>
                    <li>Traditional houses</li>
                    <li>Homestay rooms</li>
                  </>
                )}
              </ul>
            </div>

            <div className="accommodation-card">
              <h3>{language === 'fr' ? 'Campings' : 'Camping'}</h3>
              <p>
                {language === 'fr'
                  ? 'Options économiques pour profiter de la nature près du lac et des plages'
                  : 'Budget options to enjoy nature near the lake and beaches'
                }
              </p>
              <ul>
                {language === 'fr' ? (
                  <>
                    <li>Camping lac de Bizerte</li>
                    <li>Aires de camping-car</li>
                    <li>Bivouac autorisé</li>
                  </>
                ) : (
                  <>
                    <li>Bizerte lake camping</li>
                    <li>RV camping areas</li>
                    <li>Authorized bivouac</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{translations[language].ctaTitle}</h2>
            <p>{translations[language].ctaSubtitle}</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary">{translations[language].bookingButton}</a>
              <Link to="/destinations" className="btn btn-secondary">{translations[language].destinationsButton}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BizertePage;
