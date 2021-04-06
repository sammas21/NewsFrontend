import React from 'react';
import './Card.css';
import { Route, Link } from "react-router-dom";
import { STR_READ_MORE } from '../../../constants';


// Card format with props dependency on {date, author, title, description,imgSrc, url}

export default function MediaCard({date, author, title, description,imgSrc, url}) {
 
  return (
    <Route>
    <div className="blog-card">
    <div className="meta">
      <div className="photo" style={{ backgroundImage: `url(${imgSrc})`}}></div>
      <ul className="details">
        <li className="author">{author}</li>
        <li className="date">{date}</li>
      </ul>
    </div>
    <div className="description">
      <h1>{title}</h1>
      <p>{description}</p>
      <a  href={url} className="read-more" target="_blank" rel="noreferrer">
       {STR_READ_MORE}
      </a>
    </div>
  </div>
  </Route>
  );
}
