import React from 'react';
import './sideInfo.css';
import PropTypes from 'prop-types';

function SideInfo({ contactInfo }) {
  let { email } = contactInfo;
  let { phone } = contactInfo;

  if (!email) email = 'Email address';
  if (!phone) phone = 'Phone number';
  return (
    <div className="SideInfo">
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

export default SideInfo;

SideInfo.propTypes = {
  contactInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
