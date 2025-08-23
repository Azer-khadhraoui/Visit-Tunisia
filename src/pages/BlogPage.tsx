import React from 'react';
import TravelBlog from '../components/TravelBlog';
import './BlogPage.css';
import flagImage from '../assets/Flag.png';

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <div className="page-header">
        <div className="container">
          <div className="blog-title-container">
            <img src={flagImage} alt="Drapeau Tunisien" className="title-flag-bg" />
            <div className="title-overlay">
              <h1>Blog Voyage</h1>
              <p>Conseils, inspirations et découvertes pour votre voyage en Tunisie</p>
            </div>
          </div>
        </div>
      </div>
      <TravelBlog />
    </div>
  );
};

export default BlogPage;
