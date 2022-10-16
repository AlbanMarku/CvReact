import React from 'react';
import './sideDetail.css';
import PropTypes from 'prop-types';

function SideDetail({ contactInfo, contactSetter }) {
  return (
    <div className="SideDetail">
      <h3>Email address</h3>
      <input value={contactInfo.email} id="email" placeholder="Email address" required onChange={(e) => contactSetter({ ...contactInfo, email: e.target.value })} />
      <h3>Phone number</h3>
      <input value={contactInfo.phone} id="phone" placeholder="Phone number" required onChange={(e) => contactSetter({ ...contactInfo, phone: e.target.value })} />
    </div>
  );
}

export default SideDetail;

SideDetail.propTypes = {
  contactInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  contactSetter: PropTypes.func.isRequired,
};
