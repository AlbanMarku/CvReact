import React, { useState } from 'react';
import './experienceDetail.css';
import PropTypes from 'prop-types';

function ExperienceDetail({
  handleCheck, id,
}) {
  const [experienceInfo, setExperienceInfo] = useState({ pos: '', id: null });

  const handleChange = (content) => {
    setExperienceInfo({ pos: content, id });
    handleCheck(experienceInfo);
  };
  return (
    <div className="Exp">
      <h3>Details</h3>
      <input value={experienceInfo.pos} id="position" type="text" placeholder="Position" required onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

export default ExperienceDetail;

ExperienceDetail.propTypes = {
  handleCheck: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
