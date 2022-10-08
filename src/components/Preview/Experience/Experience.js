/* eslint-disable react/prop-types */
import React from 'react';

function Experience({ pos }) {
  let position = pos;
  if (!position) position = 'here';
  return (
    <h1>{position}</h1>
  );
}

export default Experience;
