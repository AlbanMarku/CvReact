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
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    setSubmitted(true);
    expCompSetter([...expComp, experienceInfo]);
  };
  return (
    <div className="Exp">
      <h3>Position</h3>
      <input disabled={submitted} value={experienceInfo.pos} id="position" type="text" placeholder="Position" required onChange={(e) => setExperienceInfo({ pos: e.target.value })} />
      {
        !submitted && (
          <button type="button" onClick={handleClick}>Click me</button>
        )
      }
    </div>
  );
}

export default ExperienceDetail;

ExperienceDetail.propTypes = {
  expSetter: PropTypes.func.isRequired,
  expInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
