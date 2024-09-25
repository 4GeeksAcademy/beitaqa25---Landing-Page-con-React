import React from 'react';

function Card({ title, description, buttonText }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img className="card-img-top" src="https://via.placeholder.com/500x325" alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">{buttonText}</a>
      </div>
    </div>
  );
}

export default Card;
