/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './preview.css';

function Preview({ pInfo, expInfo }) {
  let { firstName } = pInfo;
  let { lastName } = pInfo;
  let { title } = pInfo;
  // let { pos } = expInfo;

  if (!firstName) firstName = 'name';
  if (!lastName) lastName = 'last name';
  if (!title) title = 'title';
  // if (!pos) pos = 'Position';

  return (
    <div className="Preview">
      <div className="headerDetails">
        <h1>
          {`${firstName} ${lastName}`}
        </h1>
        <h3>{title}</h3>
      </div>
      <div className="experienceDetails">
        hey
      </div>
      <div className="educationDetails">
        <p>education</p>
      </div>
      <div className="sideDetails">
        <p>side area</p>
      </div>
    </div>
  );
}

export default Preview;

Preview.propTypes = {
  pInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  expInfo: PropTypes.objectOf(PropTypes.string).isRequired,

};
