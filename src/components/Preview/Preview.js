/* eslint-disable react/prop-types */
import React from 'react';
import './preview.css';
// import PropTypes from 'prop-types';

function Preview({ pInfo }) {
  let { firstName } = pInfo;
  let { lastName } = pInfo;
  let { title } = pInfo;

  if (!firstName) firstName = 'name';
  if (!lastName) lastName = 'last name';
  if (!title) title = 'title';

  return (
    <div className="Preview">
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{title}</p>
    </div>
  );
}

export default Preview;
