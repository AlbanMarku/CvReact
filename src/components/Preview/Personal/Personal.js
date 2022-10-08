/* eslint-disable react/prop-types */
import React from 'react';
import './personal.css';

function Personal({ firstName, lastName, title }) {
  return (
    <div className="Personal">
      <h1>
        {`${firstName} ${lastName}`}
      </h1>
      <h3>{title}</h3>
    </div>
  );
}

export default Personal;
