import React from 'react';
import PropTypes from 'prop-types';

function PersonalDetail({ setter, info }) {
  return (
    <div className="PD">
      <label htmlFor="firstName">
        First Name
        <input value={info.firstName} id="firstName" type="text" required onChange={(e) => setter({ ...info, firstName: e.target.value })} />
      </label>
      <label htmlFor="secondName">
        Second Name
        <input value={info.lastName} id="secondName" type="text" required onChange={(e) => setter({ ...info, lastName: e.target.value })} />
      </label>
      <label htmlFor="title">
        Title
        <input value={info.title} id="title" type="text" required onChange={(e) => setter({ ...info, title: e.target.value })} />
      </label>
    </div>
  );
}

export default PersonalDetail;

PersonalDetail.propTypes = {
  setter: PropTypes.func.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
};
