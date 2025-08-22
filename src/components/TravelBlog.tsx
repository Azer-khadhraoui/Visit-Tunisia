import React from 'react';
import './TravelBlog.css';

const TravelBlog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Hammams en Tunisie : une tradition de bien-être millénaire",
      excerpt: "Découvrez l'art du hammam tunisien et ses bienfaits pour le corps et l'esprit dans cette tradition ancestrale.",
      category: "Bien-être",
      image: "🛁",
      readTime: "5 min",
      date: "15 Août 2025",
      featured: true
    },
    {
      id: 2,
      title: "Les 5 plages incontournables de Tunisie",
      excerpt: "Des plages dorées de Hammamet aux eaux cristallines de Djerba, découvrez les plus belles côtes tunisiennes.",
      category: "Plages",
      image: "🏖️",
      readTime: "7 min",
      date: "12 Août 2025"
    },
    {
      id: 3,
      title: "Bivouacs de luxe dans le désert",
      excerpt: "Vivez une expérience unique sous les étoiles du Sahara avec nos bivouacs de luxe.",
      category: "Aventure",
      image: "🏜️",
      readTime: "6 min",
      date: "10 Août 2025"
    },
    {
      id: 4,
      title: "L'artisanat tunisien : un savoir-faire unique",
      excerpt: "Poterie, tissage, bijouterie... Découvrez les trésors de l'artisanat traditionnel tunisien.",
      category: "Culture",
      image: "🏺",
      readTime: "4 min",
      date: "8 Août 2025"
    },
    {
      id: 5,
      title: "Festivals de Tunisie : culture vivante",
      excerpt: "Du Festival de Carthage aux festivals de musique traditionnelle, la Tunisie vibre au rythme de ses événements culturels.",
      category: "Culture",
      image: "🎭",
      readTime: "5 min",
      date: "5 Août 2025"
    },
    {
      id: 6,
      title: "Couscous tunisien : secrets de préparation",
      excerpt: "Apprenez les secrets de la préparation du couscous authentique selon la tradition tunisienne.",
      category: "Gastronomie",
      image: "🍲",
      readTime: "6 min",
      date: "3 Août 2025"
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const categories = ["Tous", "Culture", "Plages", "Gastronomie", "Aventure", "Bien-être"];

  return (
    <section className="travel-blog section-padding" id="blog">
      <div className="container">
        <div className="section-header text-center">
          <h2>Blog Voyage</h2>
          <p>Conseils, inspirations et découvertes pour votre voyage en Tunisie</p>
        </div>

        {featuredPost && (
          <div className="featured-post">
            <div className="featured-content">
              <div className="featured-image">
                <div className="image-placeholder">
                  <span className="featured-icon">{featuredPost.image}</span>
                  <div className="post-badge">Article en vedette</div>
                </div>
              </div>
              <div className="featured-info">
                <div className="post-meta">
                  <span className="post-category">{featuredPost.category}</span>
                  <span className="post-date">{featuredPost.date}</span>
                  <span className="read-time">⏱️ {featuredPost.readTime}</span>
                </div>
                <h3>{featuredPost.title}</h3>
                <p>{featuredPost.excerpt}</p>
                <div className="featured-actions">
                  <button className="btn btn-primary">
                    Lire l'article
                  </button>
                  <button className="btn btn-outline">
                    Partager
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="blog-filters">
          <h3>Explorer par catégorie</h3>
          <div className="filter-buttons">
            {categories.map((category, index) => (
              <button 
                key={category}
                className={`filter-btn ${index === 0 ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-grid">
          {regularPosts.map((post, index) => (
            <article 
              key={post.id}
              className="blog-card fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-image">
                <div className="image-placeholder">
                  <span className="card-icon">{post.image}</span>
                </div>
                <div className="card-category">{post.category}</div>
              </div>
              
              <div className="card-content">
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="read-time">⏱️ {post.readTime}</span>
                </div>
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <button className="read-more">
                  Lire la suite
                  <span className="arrow">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta text-center">
          <h3>Restez informé de nos dernières publications</h3>
          <p>Inscrivez-vous à notre newsletter pour recevoir nos meilleurs conseils voyage</p>
          <div className="newsletter-signup">
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="newsletter-input"
              />
              <button className="btn btn-primary">
                S'abonner
              </button>
            </div>
          </div>
          <div className="blog-stats">
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Articles</span>
            </div>
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Lecteurs</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Destinations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelBlog;
