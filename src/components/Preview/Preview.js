import React from 'react';
import PropTypes from 'prop-types';
import './preview.css';

function Preview({ pInfo }) {
  let { firstName } = pInfo;
  let { lastName } = pInfo;
  let { title } = pInfo;

  if (!firstName) firstName = 'name';
  if (!lastName) lastName = 'last name';
  if (!title) title = 'title';

  return (
    <div className="Preview">
      <div className="headerDetails">
        <h1>
          {`${firstName} ${lastName}`}
        </h1>
        <h3>{title}</h3>
      </div>
      <div className="experienceDetails">
        <p>exp</p>
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
};
