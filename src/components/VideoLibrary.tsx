import React from 'react';
import './VideoLibrary.css';

const VideoLibrary: React.FC = () => {
  const videos = [
    {
      id: 1,
      title: "Une journée parfaite à Sidi Bou Saïd",
      description: "Découvrez la perle bleue et blanche de la Tunisie",
      thumbnail: "🎬",
      duration: "4:32",
      category: "Culture"
    },
    {
      id: 2,
      title: "Aventure dans le Sahara tunisien",
      description: "Expédition au cœur du désert et nuit sous les étoiles",
      thumbnail: "🎥",
      duration: "6:45",
      category: "Aventure"
    },
    {
      id: 3,
      title: "Les trésors de la médina de Tunis",
      description: "Exploration de l'un des plus beaux sites UNESCO",
      thumbnail: "📹",
      duration: "5:18",
      category: "Patrimoine"
    },
    {
      id: 4,
      title: "Gastronomie tunisienne authentique",
      description: "Du couscous aux pâtisseries orientales",
      thumbnail: "🎞️",
      duration: "3:56",
      category: "Gastronomie"
    },
    {
      id: 5,
      title: "Plages paradisiaques de Djerba",
      description: "L'île aux mille palmiers et ses eaux turquoise",
      thumbnail: "🎦",
      duration: "4:23",
      category: "Plages"
    }
  ];

  const featuredVideo = videos[0];
  const otherVideos = videos.slice(1);

  return (
    <section className="video-library section-padding" id="videos">
      <div className="container">
        <div className="section-header text-center">
          <h2>Galerie Vidéo</h2>
          <p>Plongez dans la beauté de la Tunisie à travers nos vidéos exclusives</p>
        </div>

        <div className="video-content">
          <div className="featured-video">
            <div className="video-player">
              <div className="video-placeholder">
                <div className="play-button">
                  <span className="play-icon">▶️</span>
                </div>
                <div className="video-overlay">
                  <span className="video-duration">{featuredVideo.duration}</span>
                </div>
              </div>
            </div>
            <div className="video-info">
              <div className="video-category">{featuredVideo.category}</div>
              <h3>{featuredVideo.title}</h3>
              <p>{featuredVideo.description}</p>
              <div className="video-actions">
                <button className="btn btn-primary">
                  <span>▶️</span>
                  Regarder la vidéo
                </button>
                <button className="btn btn-outline">
                  Partager
                </button>
              </div>
            </div>
          </div>

          <div className="video-grid">
            {otherVideos.map((video, index) => (
              <div 
                key={video.id}
                className="video-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="video-thumbnail">
                  <div className="thumbnail-placeholder">
                    <span className="thumbnail-icon">{video.thumbnail}</span>
                    <div className="video-overlay">
                      <span className="play-mini">▶️</span>
                      <span className="duration-mini">{video.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="video-details">
                  <div className="video-category">{video.category}</div>
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="video-cta text-center">
            <h3>Plus de vidéos vous attendent</h3>
            <p>Explorez notre collection complète de vidéos sur la Tunisie</p>
            <a href="#all-videos" className="btn btn-outline">
              Voir toutes les vidéos
            </a>
          </div>
        </div>

        <div className="video-categories">
          <h3>Explorez par catégorie</h3>
          <div className="category-filters">
            <button className="filter-btn active">
              <span className="filter-icon">🎬</span>
              Toutes
            </button>
            <button className="filter-btn">
              <span className="filter-icon">🏛️</span>
              Culture
            </button>
            <button className="filter-btn">
              <span className="filter-icon">🏖️</span>
              Plages
            </button>
            <button className="filter-btn">
              <span className="filter-icon">🐪</span>
              Aventure
            </button>
            <button className="filter-btn">
              <span className="filter-icon">🍲</span>
              Gastronomie
            </button>
            <button className="filter-btn">
              <span className="filter-icon">🕌</span>
              Patrimoine
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoLibrary;
