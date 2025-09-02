import React from 'react';
import { Link } from 'react-router-dom';
import './UsefulInfo.css';
import { useLanguage } from '../contexts/LanguageContext';

const UsefulInfo: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    fr: {
      sectionTitle: "Informations Pratiques",
      sectionSubtitle: "Tout ce que vous devez savoir pour préparer votre voyage en Tunisie",
      infoSections: [
        {
          id: 'visa',
          title: 'Visa & Formalités',
          icon: '📋',
          items: [
            'Passeport valide 6 mois',
            'Visa non requis pour UE (90 jours)',
            'Vaccins recommandés',
            'Assurance voyage conseillée'
          ]
        },
        {
          id: 'transport',
          title: 'Se Déplacer',
          icon: '🚗',
          items: [
            'Location de voiture',
            'Taxis & Louages',
            'Transport en commun',
            'Vols domestiques'
          ]
        },
        {
          id: 'accommodation',
          title: 'Hébergement',
          icon: '🏨',
          items: [
            'Hôtels de luxe',
            'Maisons d\'hôtes',
            'Camping désert',
            'Riads traditionnels'
          ]
        },
        {
          id: 'essentials',
          title: 'À Savoir',
          icon: '💡',
          items: [
            'Monnaie : Dinar tunisien',
            'Langues : Arabe, Français',
            'Religion : Islam',
            'Électricité : 230V'
          ]
        },
        {
          id: 'climate',
          title: 'Climat & Saisons',
          icon: '🌤️',
          items: [
            'Printemps : Mars-Mai',
            'Été : Juin-Août (chaud)',
            'Automne : Sept-Nov',
            'Hiver : Déc-Fév (doux)'
          ]
        },
        {
          id: 'budget',
          title: 'Budget Voyage',
          icon: '💰',
          items: [
            'Économique : 30-50€/jour',
            'Moyen : 50-100€/jour',
            'Luxe : 100€+/jour',
            'Pourboires : 10%'
          ]
        }
      ],
      emergencyTitle: "Contacts d'Urgence",
      emergencyContacts: [
        { title: "Police", number: "197" },
        { title: "SAMU", number: "190" },
        { title: "Pompiers", number: "198" },
        { title: "Ambassade France", number: "+216 71 104 000" }
      ],
      travelTipsTitle: "Conseils de Voyage",
      tips: [
        {
          title: "Meilleure période",
          description: "Avril-Juin et Septembre-Novembre pour un climat idéal"
        },
        {
          title: "Code vestimentaire",
          description: "Respectueux dans les lieux religieux, décontracté sur les plages"
        },
        {
          title: "Marchandage",
          description: "Tradition dans les souks, négociez avec le sourire"
        }
      ],
      guidesTitle: "Guides Pratiques",
      guidesSubtitle: "Explorez nos différentes sections pour planifier votre voyage",
      guideButtons: [
        { text: "🚌 Guide Transport", link: "/blog" },
        { text: "🗺️ Toutes Destinations", link: "/destinations" },
        { text: "🎯 Types d'Expériences", link: "/experiences" }
      ]
    },
    en: {
      sectionTitle: "Practical Information",
      sectionSubtitle: "Everything you need to know to prepare your trip to Tunisia",
      infoSections: [
        {
          id: 'visa',
          title: 'Visa & Formalities',
          icon: '📋',
          items: [
            'Valid passport for 6 months',
            'No visa required for EU (90 days)',
            'Recommended vaccines',
            'Travel insurance advised'
          ]
        },
        {
          id: 'transport',
          title: 'Getting Around',
          icon: '🚗',
          items: [
            'Car rental',
            'Taxis & Shared taxis',
            'Public transport',
            'Domestic flights'
          ]
        },
        {
          id: 'accommodation',
          title: 'Accommodation',
          icon: '🏨',
          items: [
            'Luxury hotels',
            'Guesthouses',
            'Desert camping',
            'Traditional riads'
          ]
        },
        {
          id: 'essentials',
          title: 'Good to Know',
          icon: '💡',
          items: [
            'Currency: Tunisian Dinar',
            'Languages: Arabic, French',
            'Religion: Islam',
            'Electricity: 230V'
          ]
        },
        {
          id: 'climate',
          title: 'Climate & Seasons',
          icon: '🌤️',
          items: [
            'Spring: March-May',
            'Summer: June-August (hot)',
            'Autumn: Sept-Nov',
            'Winter: Dec-Feb (mild)'
          ]
        },
        {
          id: 'budget',
          title: 'Travel Budget',
          icon: '💰',
          items: [
            'Budget: 30-50€/day',
            'Mid-range: 50-100€/day',
            'Luxury: 100€+/day',
            'Tips: 10%'
          ]
        }
      ],
      emergencyTitle: "Emergency Contacts",
      emergencyContacts: [
        { title: "Police", number: "197" },
        { title: "Emergency Medical", number: "190" },
        { title: "Fire Department", number: "198" },
        { title: "French Embassy", number: "+216 71 104 000" }
      ],
      travelTipsTitle: "Travel Tips",
      tips: [
        {
          title: "Best time to visit",
          description: "April-June and September-November for ideal weather"
        },
        {
          title: "Dress code",
          description: "Respectful in religious places, casual on beaches"
        },
        {
          title: "Bargaining",
          description: "Traditional in souks, negotiate with a smile"
        }
      ],
      guidesTitle: "Practical Guides",
      guidesSubtitle: "Explore our different sections to plan your trip",
      guideButtons: [
        { text: "🚌 Transport Guide", link: "/blog" },
        { text: "🗺️ All Destinations", link: "/destinations" },
        { text: "🎯 Types of Experiences", link: "/experiences" }
      ]
    }
  };

  const t = translations[language];

  return (
    <section className="useful-info section-padding" id="infos-pratiques">
      <div className="container">
        <div className="section-header text-center">
          <h2>{t.sectionTitle}</h2>
          <p>{t.sectionSubtitle}</p>
        </div>

        <div className="info-grid">
          {t.infoSections.map((section, index) => (
            <div 
              key={section.id}
              className="info-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="info-header">
                <div className="info-icon">
                  {section.icon}
                </div>
                <h3>{section.title}</h3>
              </div>
              <div className="info-content">
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <span className="info-bullet">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="emergency-info">
          <h3>{t.emergencyTitle}</h3>
          <div className="emergency-grid">
            {t.emergencyContacts.map((contact, index) => (
              <div key={index} className="emergency-card">
                <span className="emergency-icon">
                  {index === 0 ? '🚨' : index === 1 ? '🚑' : index === 2 ? '🚒' : '🏛️'}
                </span>
                <div>
                  <h4>{contact.title}</h4>
                  <p>{contact.number}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="travel-tips">
          <div className="tips-content">
            <div className="tips-left">
              <h3>{t.travelTipsTitle}</h3>
              {t.tips.map((tip, index) => (
                <div key={index} className="tip-item">
                  <span className="tip-icon">
                    {index === 0 ? '🌊' : index === 1 ? '👗' : '🛒'}
                  </span>
                  <div>
                    <h4>{tip.title}</h4>
                    <p>{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="tips-right">
              <div className="download-guides">
                <h4>{t.guidesTitle}</h4>
                <p>{t.guidesSubtitle}</p>
                <div className="guide-buttons">
                  {t.guideButtons.map((guide, index) => (
                    <Link key={index} to={guide.link} className="guide-btn">
                      {guide.text}
                    </Link>
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

export default UsefulInfo;
