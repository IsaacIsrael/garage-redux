import React from 'react';

const Car = (props) => {
  const { info } = props;
  return (
    <div className="car-card">
      <img className="logo" src="/assets/images/logo_square.svg" alt="Car logo" />
      <div className="car-info">
        <span>{`${info.brand} - ${info.model}`}</span>
        <p><strong>Owner:</strong>{info.owner}</p>
        <span className="plate">{info.plate}</span>
      </div>
      {props.children}
    </div>
  );
};

export default Car;
