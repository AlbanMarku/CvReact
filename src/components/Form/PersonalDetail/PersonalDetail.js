import React from 'react';
import PropTypes from 'prop-types';
import './personalDetail.css';

function PersonalDetail({ setter, info }) {
  return (
    <div className="PD">
      <label htmlFor="firstName">
        <input value={info.firstName} id="firstName" type="text" placeholder="First name" required onChange={(e) => setter({ ...info, firstName: e.target.value })} />
      </label>
      <label htmlFor="secondName">
        <input value={info.lastName} id="secondName" type="text" placeholder="Second name" required onChange={(e) => setter({ ...info, lastName: e.target.value })} />
      </label>
      <label htmlFor="title">
        <input value={info.title} id="title" type="text" placeholder="Title" required onChange={(e) => setter({ ...info, title: e.target.value })} />
      </label>
    </div>
  );
}

export default PersonalDetail;

PersonalDetail.propTypes = {
  setter: PropTypes.func.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
};
