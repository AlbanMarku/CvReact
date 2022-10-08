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
      <h1>
        {`${firstName} ${lastName}`}
      </h1>
      <h3>{title}</h3>
    </div>
  );
}

export default Personal;
