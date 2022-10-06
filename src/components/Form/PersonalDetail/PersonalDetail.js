import React from 'react';
import PropTypes from 'prop-types';
import './personalDetail.css';

function PersonalDetail({ setter, info }) {
  return (
    <div className="PD">
      <h2>Title details</h2>
      <input value={info.firstName} id="firstName" type="text" placeholder="First name" required onChange={(e) => setter({ ...info, firstName: e.target.value })} />
      <input value={info.lastName} id="secondName" type="text" placeholder="Second name" required onChange={(e) => setter({ ...info, lastName: e.target.value })} />
      <input value={info.title} id="title" type="text" placeholder="Title" required onChange={(e) => setter({ ...info, title: e.target.value })} />
    </div>
  );
}

export default PersonalDetail;

PersonalDetail.propTypes = {
  setter: PropTypes.func.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
};
