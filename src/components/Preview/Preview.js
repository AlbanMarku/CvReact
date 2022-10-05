/* eslint-disable react/prop-types */
import React from 'react';
import './preview.css';
// import PropTypes from 'prop-types';

function Preview({ pInfo }) {
  // this would work as expected if i actully recieved an object i can use
  const first = pInfo.firstName;
  const second = pInfo.lastName;
  return (
    <div className="Preview">
      <p>{first}</p>
      <p>{second}</p>
    </div>
  );
}

export default Preview;
