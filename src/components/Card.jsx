import React from 'react';

function Card(props) {

  return (
    <div className="card">
      {props.img && <img src={props.img} className="card-img-top" alt="Picture" />}
      <div className="card-body">
        {props.children}
      </div>
    </div>
  );
}

export default Card;
