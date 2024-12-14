import React from 'react';
import './Card.css'; // Ensure this path matches the location of your CSS file

const Card = (props) => {
  return (

    <div className='main'>
    <div className="card">
      <div className="img"></div>      
      {/* to add image using the props */}

      <span>Name</span>
      <p>{props.name}</p>

      <span>About Me</span>
      <p className="info">
        {props.story}
      </p>

      <button>Watch Now!!!</button>
    </div>
    </div>
  );
};

export default Card;
