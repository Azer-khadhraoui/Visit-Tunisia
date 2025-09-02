import React from 'react';
import './TransportPage.css';
import { useLanguage } from '../contexts/LanguageContext';
import flagImage from '../assets/Flag.png';
import louageImage from '../assets/louage.jpg';
import trainImage from '../assets/train.jpg';
import busImage from '../assets/bus tunis.jpg';
import tramwayImage from '../assets/tramway tunis.jpg';
import metroImage from '../assets/metro sahel.jpg';
import taxiImage from '../assets/taxi.jpg';
import taxiCollectifImage from '../assets/taxi collectif.jpg';
import taxiTouristiqueImage from '../assets/taxi touristique.jpg';
import tunisairImage from '../assets/tunisair vol.png';
import carteMetroSahelImage from '../assets/carte metro sahel.jpg';
import tunisMapMetroImage from '../assets/tunis-map-metro.png';

const TransportPage: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      pageTitle: "Transports en Tunisie",
      pageSubtitle: "Découvrez tous les moyens de transport pour voyager facilement à travers la Tunisie",
      transportModes: [
        {
          title: "Louage",
          description: "Le louage est le moyen de transport interurbain le plus populaire en Tunisie. Ces minibus de 8 places relient rapidement toutes les villes du pays.",
          details: {
            price: "Prix: 3-15 DT selon la distance",
            advantages: "Avantages: Rapide, fréquent, économique",
            routes: "Trajets: Toutes les villes principales"
          }
        },
        {
          title: "Train SNCFT",
          description: "Le réseau ferroviaire tunisien dessert les principales villes du nord et du centre. Confortable et ponctuel pour les longues distances.",
          details: {
            price: "Prix: 5-25 DT selon la classe",
            lines: "Lignes: Tunis-Sousse-Sfax, Tunis-Bizerte",
            comfort: "Confort: 1ère et 2ème classe disponibles"
          }
        },
        {
          title: "Tramway de Tunis",
          description: "Le réseau de tramway de Tunis comprend 6 lignes qui desservent la capitale et sa banlieue, incluant le TGM vers La Marsa.",
          details: {
            price: "Prix: 0.5-1 DT par trajet",
            network: "Réseau: 6 lignes dans le Grand Tunis",
            tgm: "TGM: Ligne principale Tunis ↔ La Marsa"
          }
        },
        {
          title: "Métro Léger du Sahel",
          description: "Le métro léger dessert Sousse, Monastir, Mahdia et l'aéroport de Monastir. Réseau moderne pour la côte est tunisienne.",
          details: {
            price: "Prix: 0.5-2 DT selon les zones",
            route: "Parcours: Sousse ↔ Monastir ↔ Mahdia",
            airport: "Aéroport: Desserte aéroport Monastir"
          }
        },
        {
          title: "Bus Urbains & Interurbains",
          description: "Réseau de bus complet couvrant toute la Tunisie. Les bus urbains desservent les villes, les interurbains connectent les régions.",
          details: {
            price: "Prix: 0.4-20 DT selon la distance",
            types: "Types: Urbains, interurbains, climatisés",
            coverage: "Couverture: Tout le territoire national"
          }
        },
        {
          title: "Taxis Individuels",
          description: "Taxis jaunes dans les villes, disponibles jour et nuit. Compteur obligatoire en ville, prix à négocier pour les longues distances.",
          details: {
            price: "Prix: 0.8 DT/km + prise en charge",
            availability: "Disponibilité: 24h/24 dans les grandes villes",
            supplement: "Supplément: Bagages, nuit, aéroport"
          }
        },
        {
          title: "Taxis Touristiques",
          description: "Taxis spécialisés pour les excursions touristiques avec chauffeurs-guides. Idéal pour visiter les sites historiques et attractions.",
          details: {
            price: "Prix: 50-200 DT/jour selon service",
            services: "Services: Guide, excursions, transferts",
            destinations: "Destinations: Sites touristiques majeurs"
          }
        },
        {
          title: "Taxis Collectifs",
          description: "Service de transport partagé reliant quartiers et villes proches. Solution économique pour les trajets réguliers de courte distance.",
          details: {
            price: "Prix: 1-5 DT selon trajet",
            type: "Type: Transport partagé",
            usage: "Usage: Liaisons courtes fréquentes"
          }
        },
        {
          title: "Transport Aérien",
          description: "Tunisair et autres compagnies assurent les vols domestiques et internationaux. Aéroports dans les principales villes touristiques.",
          details: {
            companies: "Compagnies: Tunisair, Nouvelair",
            airports: "Aéroports: Tunis, Djerba, Monastir, Tozeur",
            flights: "Vols: Domestiques et internationaux"
          }
        }
      ],
      mapSection: {
        title: "Cartes des Transports",
        sahelMetro: {
          title: "Plan du Métro Léger du Sahel",
          description: "Réseau de métro léger reliant Sousse, Monastir et Mahdia, avec desserte de l'aéroport international de Monastir.",
          details: ["🚇 Métro léger", "✈️ Aéroport Monastir", "🏖️ Côte du Sahel"]
        },
        tunisTramway: {
          title: "Plan du Réseau Tramway de Tunis",
          description: "Réseau complet de 6 lignes de tramway desservant Tunis et sa banlieue, incluant le TGM vers Carthage et La Marsa.",
          details: ["🚊 6 lignes de tramway", "📍 Grand Tunis", "🏛️ TGM vers sites historiques"]
        }
      },
      tipsSection: {
        title: "Conseils Transport",
        tips: [
          {
            icon: "💰",
            title: "Économisez",
            description: "Les cartes d'abonnement métro/tramway sont plus économiques pour plusieurs trajets"
          },
          {
            icon: "🕐",
            title: "Évitez les heures de pointe",
            description: "7h-9h et 17h-19h sont les périodes les plus chargées"
          },
          {
            icon: "📱",
            title: "Applications mobiles",
            description: "Téléchargez les apps locales pour horaires et itinéraires en temps réel"
          }
        ]
      },
      hubsSection: {
        title: "Hubs de Transport Principaux",
        hubs: [
          {
            icon: "🚇",
            title: "Station Barcelone (Tunis)",
            description: "Hub principal de la capitale - Point de convergence pour tramway et correspondances multiples dans le réseau de Tunis.",
            services: ["🚊 Tramway Tunis", "🚌 Bus urbains", "🏛️ Centre-ville"]
          },
          {
            icon: "🚌",
            title: "Gare Moncef Bey (Tunis)",
            description: "Station principale des louages - Point central de départ des louages vers toutes les destinations tunisiennes depuis la capitale.",
            services: ["🗺️ Toutes destinations", "⏰ Départs fréquents", "💰 Prix abordables"]
          }
        ]
      }
    },
    en: {
      pageTitle: "Transportation in Tunisia",
      pageSubtitle: "Discover all the transportation options to travel easily across Tunisia",
      transportModes: [
        {
          title: "Shared Taxi (Louage)",
          description: "The louage is the most popular intercity transport in Tunisia. These 8-seat minibuses quickly connect all cities in the country.",
          details: {
            price: "Price: 3-15 DT depending on distance",
            advantages: "Advantages: Fast, frequent, economical",
            routes: "Routes: All major cities"
          }
        },
        {
          title: "SNCFT Train",
          description: "The Tunisian railway network serves the main cities of the north and center. Comfortable and punctual for long distances.",
          details: {
            price: "Price: 5-25 DT depending on class",
            lines: "Lines: Tunis-Sousse-Sfax, Tunis-Bizerte",
            comfort: "Comfort: 1st and 2nd class available"
          }
        },
        {
          title: "Tunis Tramway",
          description: "The Tunis tramway network includes 6 lines serving the capital and its suburbs, including the TGM to La Marsa.",
          details: {
            price: "Price: 0.5-1 DT per trip",
            network: "Network: 6 lines in Greater Tunis",
            tgm: "TGM: Main line Tunis ↔ La Marsa"
          }
        },
        {
          title: "Sahel Light Rail",
          description: "The light rail serves Sousse, Monastir, Mahdia and Monastir airport. Modern network for the Tunisian east coast.",
          details: {
            price: "Price: 0.5-2 DT depending on zones",
            route: "Route: Sousse ↔ Monastir ↔ Mahdia",
            airport: "Airport: Monastir airport service"
          }
        },
        {
          title: "Urban & Intercity Buses",
          description: "Complete bus network covering all of Tunisia. Urban buses serve cities, intercity buses connect regions.",
          details: {
            price: "Price: 0.4-20 DT depending on distance",
            types: "Types: Urban, intercity, air-conditioned",
            coverage: "Coverage: Entire national territory"
          }
        },
        {
          title: "Individual Taxis",
          description: "Yellow taxis in cities, available day and night. Meter mandatory in city, price to negotiate for long distances.",
          details: {
            price: "Price: 0.8 DT/km + pickup charge",
            availability: "Availability: 24/7 in major cities",
            supplement: "Supplement: Luggage, night, airport"
          }
        },
        {
          title: "Tourist Taxis",
          description: "Specialized taxis for tourist excursions with driver-guides. Ideal for visiting historical sites and attractions.",
          details: {
            price: "Price: 50-200 DT/day depending on service",
            services: "Services: Guide, excursions, transfers",
            destinations: "Destinations: Major tourist sites"
          }
        },
        {
          title: "Shared Taxis",
          description: "Shared transport service connecting neighborhoods and nearby cities. Economical solution for regular short-distance trips.",
          details: {
            price: "Price: 1-5 DT depending on trip",
            type: "Type: Shared transport",
            usage: "Usage: Frequent short connections"
          }
        },
        {
          title: "Air Transport",
          description: "Tunisair and other airlines provide domestic and international flights. Airports in major tourist cities.",
          details: {
            companies: "Companies: Tunisair, Nouvelair",
            airports: "Airports: Tunis, Djerba, Monastir, Tozeur",
            flights: "Flights: Domestic and international"
          }
        }
      ],
      mapSection: {
        title: "Transportation Maps",
        sahelMetro: {
          title: "Sahel Light Rail Map",
          description: "Light rail network connecting Sousse, Monastir and Mahdia, with service to Monastir international airport.",
          details: ["🚇 Light rail", "✈️ Monastir Airport", "🏖️ Sahel Coast"]
        },
        tunisTramway: {
          title: "Tunis Tramway Network Map",
          description: "Complete network of 6 tramway lines serving Tunis and its suburbs, including the TGM to Carthage and La Marsa.",
          details: ["🚊 6 tramway lines", "📍 Greater Tunis", "🏛️ TGM to historical sites"]
        }
      },
      tipsSection: {
        title: "Transportation Tips",
        tips: [
          {
            icon: "💰",
            title: "Save Money",
            description: "Metro/tramway subscription cards are more economical for multiple trips"
          },
          {
            icon: "🕐",
            title: "Avoid Rush Hours",
            description: "7-9 AM and 5-7 PM are the busiest periods"
          },
          {
            icon: "📱",
            title: "Mobile Apps",
            description: "Download local apps for real-time schedules and routes"
          }
        ]
      },
      hubsSection: {
        title: "Main Transportation Hubs",
        hubs: [
          {
            icon: "🚇",
            title: "Barcelone Station (Tunis)",
            description: "Main hub of the capital - Convergence point for tramway and multiple connections in the Tunis network.",
            services: ["🚊 Tunis Tramway", "🚌 Urban buses", "🏛️ City center"]
          },
          {
            icon: "🚌",
            title: "Moncef Bey Station (Tunis)",
            description: "Main louage station - Central departure point for louages to all Tunisian destinations from the capital.",
            services: ["🗺️ All destinations", "⏰ Frequent departures", "💰 Affordable prices"]
          }
        ]
      }
    }
  };

  const t = translations[language];
  return (
    <div className="transport-page">
      <div className="page-header">
        <div className="container">
          <div className="transport-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <div className="title-overlay">
              <h1>{t.pageTitle}</h1>
              <p>{t.pageSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="transport-modes container">
        {t.transportModes.map((mode, index) => (
          <div key={index} className="mode-card">
            <img src={[louageImage, trainImage, tramwayImage, metroImage, busImage, taxiImage, taxiTouristiqueImage, taxiCollectifImage, tunisairImage][index]} alt={mode.title} />
            <h2>{mode.title}</h2>
            <p>{mode.description}</p>
            <div className="transport-details">
              {Object.values(mode.details).map((detail, detailIndex) => (
                <div key={detailIndex} className="detail"><strong>{detail}</strong></div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="transport-maps">
          <h3>{t.mapSection.title}</h3>
          <div className="maps-grid">
            <div className="map-card">
              <img src={carteMetroSahelImage} alt="Carte Métro Sahel" />
              <div className="map-info">
                <h3>{t.mapSection.sahelMetro.title}</h3>
                <p>{t.mapSection.sahelMetro.description}</p>
                <div className="map-details">
                  {t.mapSection.sahelMetro.details.map((detail, index) => (
                    <span key={index}>{detail}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="map-card">
              <img src={tunisMapMetroImage} alt="Plan Tramway Tunis" />
              <div className="map-info">
                <h3>{t.mapSection.tunisTramway.title}</h3>
                <p>{t.mapSection.tunisTramway.description}</p>
                <div className="map-details">
                  {t.mapSection.tunisTramway.details.map((detail, index) => (
                    <span key={index}>{detail}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="transport-tips">
            <h3>{t.tipsSection.title}</h3>
            <div className="tips-grid">
              {t.tipsSection.tips.map((tip, index) => (
                <div key={index} className="tip">
                  <span className="tip-icon">{tip.icon}</span>
                  <div>
                    <h4>{tip.title}</h4>
                    <p>{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Section Hubs de Transport */}
          <div className="transport-hubs">
            <h3>{t.hubsSection.title}</h3>
            <div className="hubs-grid">
              {t.hubsSection.hubs.map((hub, index) => (
                <div key={index} className="hub-card">
                  <span className="hub-icon">{hub.icon}</span>
                  <div>
                    <h4>{hub.title}</h4>
                    <p><strong>{hub.description}</strong></p>
                    <div className="hub-services">
                      {hub.services.map((service, serviceIndex) => (
                        <span key={serviceIndex}>{service}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportPage;