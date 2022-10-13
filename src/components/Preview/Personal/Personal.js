/* eslint-disable react/prop-types */
import React from 'react';
import './personal.css';

function Personal({ pInfo }) {
  let { firstName } = pInfo;
  let { lastName } = pInfo;
  let { title } = pInfo;

  if (!firstName) firstName = 'name';
  if (!lastName) lastName = 'last name';
  if (!title) title = 'title';
  return (
    <div className="Personal">
      <h2>{title}</h2>
      <h1>
        {`${firstName} ${lastName}`}
      </h1>
    </div>
  );
}

export default Personal;
