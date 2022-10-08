/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */
import React, { useState } from 'react';
import './experienceDetail.css';
import PropTypes from 'prop-types';

function ExperienceDetail({
  expComp, expCompSetter, handleCheck, id,
}) {
  const [experienceInfo, setExperienceInfo] = useState({ pos: '' });

  const handleChange = (content) => {
    console.log('they key is');
    console.log(id);
    setExperienceInfo({ pos: content, id });
    handleCheck(experienceInfo);
  };
  return (
    <div className="Exp">
      <h3>Position</h3>
      <input value={experienceInfo.pos} id="position" type="text" placeholder="Position" required onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

export default ExperienceDetail;

ExperienceDetail.propTypes = {
  expSetter: PropTypes.func.isRequired,
  expInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
