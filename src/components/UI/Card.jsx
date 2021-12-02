import React from 'react';
import '../../assets/css/Card.css';

const Card = props => {
  return (
    <div className={props.className ? `${props.className} card` : 'card'}>
      {props.children}
    </div>
  );
};

export default Card;
