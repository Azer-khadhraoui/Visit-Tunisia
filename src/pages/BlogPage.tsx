import React from 'react';
import TravelBlog from '../components/TravelBlog';
import './BlogPage.css';

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page">
      <div className="page-header">
        <div className="container">
          <h1>Blog Voyage</h1>
          <p>Conseils, inspirations et découvertes pour votre voyage en Tunisie</p>
        </div>
      </div>
      <TravelBlog />
    </div>
  );
};

export default BlogPage;
