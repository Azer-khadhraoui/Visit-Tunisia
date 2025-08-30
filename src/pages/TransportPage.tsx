import React from 'react';
import './TransportPage.css';
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
  return (
    <div className="transport-page">
      <div className="page-header">
        <div className="container">
          <div className="transport-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <div className="title-overlay">
              <h1>Transports en Tunisie</h1>
              <p>Découvrez tous les moyens de transport pour voyager facilement à travers la Tunisie</p>
            </div>
          </div>
        </div>
      </div>
      <div className="transport-modes container">
        <div className="mode-card">
          <img src={louageImage} alt="Louage Tunisie" />
          <h2>Louage</h2>
          <p>Le louage est le moyen de transport interurbain le plus populaire en Tunisie. Ces minibus de 8 places relient rapidement toutes les villes du pays.</p>
          <div className="transport-details">
            <div className="detail"><strong>Prix:</strong> 3-15 DT selon la distance</div>
            <div className="detail"><strong>Avantages:</strong> Rapide, fréquent, économique</div>
            <div className="detail"><strong>Trajets:</strong> Toutes les villes principales</div>
          </div>
        </div>
        
        <div className="mode-card">
          <img src={trainImage} alt="Train Tunisie" />
          <h2>Train SNCFT</h2>
          <p>Le réseau ferroviaire tunisien dessert les principales villes du nord et du centre. Confortable et ponctuel pour les longues distances.</p>
          <div className="transport-details">
            <div className="detail"><strong>Prix:</strong> 5-25 DT selon la classe</div>
            <div className="detail"><strong>Lignes:</strong> Tunis-Sousse-Sfax, Tunis-Bizerte</div>
            <div className="detail"><strong>Confort:</strong> 1ère et 2ème classe disponibles</div>
          </div>
        </div>
        
        <div className="mode-card">
          <img src={tramwayImage} alt="Tramway Tunis" />
          <h2>Tramway de Tunis</h2>
          <p>Le réseau de tramway de Tunis comprend 6 lignes qui desservent la capitale et sa banlieue, incluant le TGM vers La Marsa.</p>
          <div className="transport-details">
            <div className="detail"><strong>Prix:</strong> 0.5-1 DT par trajet</div>
            <div className="detail"><strong>Réseau:</strong> 6 lignes dans le Grand Tunis</div>
            <div className="detail"><strong>TGM:</strong> Ligne principale Tunis ↔ La Marsa</div>
          </div>
        </div>
        
        <div className="mode-card">
          <img src={metroImage} alt="Métro Sahel" />
          <h2>Métro Léger du Sahel</h2>
          <p>Le métro léger dessert Sousse, Monastir, Mahdia et l'aéroport de Monastir. Réseau moderne pour la côte est tunisienne.</p>
          <div className="transport-details">
            <div className="detail"><strong>Prix:</strong> 0.5-2 DT selon les zones</div>
            <div className="detail"><strong>Parcours:</strong> Sousse ↔ Monastir ↔ Mahdia</div>
            <div className="detail"><strong>Aéroport:</strong> Desserte aéroport Monastir</div>
          </div>
        </div>
        
        <div className="mode-card">
          <img src={busImage} alt="Bus Tunis" />
          <h2>Bus Urbains & Interurbains</h2>
          <p>Réseau de bus complet couvrant toute la Tunisie. Les bus urbains desservent les villes, les interurbains connectent les régions.</p>
          <div className="transport-details">
            <div className="detail"><strong>Prix:</strong> 0.4-20 DT selon la distance</div>
            <div className="detail"><strong>Types:</strong> Urbains, interurbains, climatisés</div>
            <div className="detail"><strong>Couverture:</strong> Tout le territoire national</div>
          </div>
        </div>
        
        <div className="mode-card">
          <img src={taxiImage} alt="Taxi Tunisie" />
          <h2>Taxis Individuels</h2>
          <p>Taxis jaunes dans les villes, disponibles jour et nuit. Compteur obligatoire en ville, prix à négocier pour les longues distances.</p>
          <div className="transport-details">
            <div className="detail"><strong>Prix:</strong> 0.8 DT/km + prise en charge</div>
            <div className="detail"><strong>Disponibilité:</strong> 24h/24 dans les grandes villes</div>
            <div className="detail"><strong>Supplément:</strong> Bagages, nuit, aéroport</div>
          </div>
        </div>
        
        <div className="mode-card">
          <img src={taxiTouristiqueImage} alt="Taxi Touristique" />
          <h2>Taxis Touristiques</h2>
          <p>Taxis spécialisés pour les excursions touristiques avec chauffeurs-guides. Idéal pour visiter les sites historiques et attractions.</p>
          <div className="transport-details">
            <div className="detail"><strong>Prix:</strong> 50-200 DT/jour selon service</div>
            <div className="detail"><strong>Services:</strong> Guide, excursions, transferts</div>
            <div className="detail"><strong>Destinations:</strong> Sites touristiques majeurs</div>
          </div>
        </div>
        
        <div className="mode-card">
          <img src={taxiCollectifImage} alt="Taxi Collectif" />
          <h2>Taxis Collectifs</h2>
          <p>Service de transport partagé reliant quartiers et villes proches. Solution économique pour les trajets réguliers de courte distance.</p>
          <div className="transport-details">
            <div className="detail"><strong>Prix:</strong> 1-5 DT selon trajet</div>
            <div className="detail"><strong>Type:</strong> Transport partagé</div>
            <div className="detail"><strong>Usage:</strong> Liaisons courtes fréquentes</div>
          </div>
        </div>
        
        <div className="mode-card">
          <img src={tunisairImage} alt="Tunisair" />
          <h2>Transport Aérien</h2>
          <p>Tunisair et autres compagnies assurent les vols domestiques et internationaux. Aéroports dans les principales villes touristiques.</p>
          <div className="transport-details">
            <div className="detail"><strong>Compagnies:</strong> Tunisair, Nouvelair</div>
            <div className="detail"><strong>Aéroports:</strong> Tunis, Djerba, Monastir, Tozeur</div>
            <div className="detail"><strong>Vols:</strong> Domestiques et internationaux</div>
          </div>
        </div>
        
        <div className="transport-maps">
          <h3>Cartes des Transports</h3>
          <div className="maps-grid">
            <div className="map-card">
              <img src={carteMetroSahelImage} alt="Carte Métro Sahel" />
              <div className="map-info">
                <h3>Plan du Métro Léger du Sahel</h3>
                <p>Réseau de métro léger reliant Sousse, Monastir et Mahdia, avec desserte de l'aéroport international de Monastir.</p>
                <div className="map-details">
                  <span>🚇 Métro léger</span>
                  <span>✈️ Aéroport Monastir</span>
                  <span>🏖️ Côte du Sahel</span>
                </div>
              </div>
            </div>
            
            <div className="map-card">
              <img src={tunisMapMetroImage} alt="Plan Tramway Tunis" />
              <div className="map-info">
                <h3>Plan du Réseau Tramway de Tunis</h3>
                <p>Réseau complet de 6 lignes de tramway desservant Tunis et sa banlieue, incluant le TGM vers Carthage et La Marsa.</p>
                <div className="map-details">
                  <span>🚊 6 lignes de tramway</span>
                  <span>📍 Grand Tunis</span>
                  <span>🏛️ TGM vers sites historiques</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="transport-tips">
            <h3>Conseils Transport</h3>
            <div className="tips-grid">
              <div className="tip">
                <span className="tip-icon">💰</span>
                <div>
                  <h4>Économisez</h4>
                  <p>Les cartes d'abonnement métro/tramway sont plus économiques pour plusieurs trajets</p>
                </div>
              </div>
              <div className="tip">
                <span className="tip-icon">🕐</span>
                <div>
                  <h4>Évitez les heures de pointe</h4>
                  <p>7h-9h et 17h-19h sont les périodes les plus chargées</p>
                </div>
              </div>
              <div className="tip">
                <span className="tip-icon">📱</span>
                <div>
                  <h4>Applications mobiles</h4>
                  <p>Téléchargez les apps locales pour horaires et itinéraires en temps réel</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Section Hubs de Transport */}
          <div className="transport-hubs">
            <h3>Hubs de Transport Principaux</h3>
            <div className="hubs-grid">
              <div className="hub-card">
                <span className="hub-icon">🚇</span>
                <div>
                  <h4>Station Barcelone (Tunis)</h4>
                  <p><strong>Hub principal de la capitale</strong> - Point de convergence pour tramway et correspondances multiples dans le réseau de Tunis.</p>
                  <div className="hub-services">
                    <span>🚊 Tramway Tunis</span>
                    <span>🚌 Bus urbains</span>
                    <span>🏛️ Centre-ville</span>
                  </div>
                </div>
              </div>
              <div className="hub-card">
                <span className="hub-icon">🚌</span>
                <div>
                  <h4>Gare Moncef Bey (Tunis)</h4>
                  <p><strong>Station principale des louages</strong> - Point central de départ des louages vers toutes les destinations tunisiennes depuis la capitale.</p>
                  <div className="hub-services">
                    <span>🗺️ Toutes destinations</span>
                    <span>⏰ Départs fréquents</span>
                    <span>💰 Prix abordables</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportPage;