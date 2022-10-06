import React from 'react';
import './experienceDetail.css';
import PropTypes from 'prop-types';

function ExperienceDetail({ expSetter, expInfo }) {
  return (
    <div className="Exp">
      <h2>Experience details</h2>
      <input value={expInfo.pos} id="position" type="text" placeholder="Position" required onChange={(e) => expSetter({ ...expInfo, pos: e.target.value })} />
    </div>
  );
}

export default ExperienceDetail;

ExperienceDetail.propTypes = {
  expSetter: PropTypes.func.isRequired,
  expInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
