import React from 'react';
import './Card.css';

export default function MediaCard({date, author, title, description,imgSrc}) {
 
  return (
    <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{ backgroundImage: `url(${imgSrc})` }}></div>
      <ul className="details">
        <li className="author">{author}</li>
        <li className="date">{date}</li>
      </ul>
    </div>
    <div className="description">
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="read-more">
        Read More
      </p>
    </div>
  </div>
  );
}
