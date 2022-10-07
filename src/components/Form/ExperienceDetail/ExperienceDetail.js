/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import React, { useState } from 'react';
import './experienceDetail.css';
import PropTypes from 'prop-types';

function ExperienceDetail({
  expComp, expCompSetter,
}) {
  const [experienceInfo, setExperienceInfo] = useState({ pos: '' });
  const handleClick = () => {
    expCompSetter([...expComp, experienceInfo]);
  };
  return (
    <div className="Exp">
      <h2>Experience details</h2>
      <input value={experienceInfo.pos} id="position" type="text" placeholder="Position" required onChange={(e) => setExperienceInfo({ pos: e.target.value })} />
      <button type="button" onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ExperienceDetail;

ExperienceDetail.propTypes = {
  expSetter: PropTypes.func.isRequired,
  expInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
