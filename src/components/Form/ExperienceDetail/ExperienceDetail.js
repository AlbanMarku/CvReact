import React, { useState, useEffect } from 'react';
import './experienceDetail.css';
import PropTypes from 'prop-types';

function ExperienceDetail({
  handleCheck, expInfo,
}) {
  // const [experienceInfo, setExperienceInfo] = useState({ pos: '', id: null });

  useEffect(() => {
    // handleCheck(experienceInfo);
    console.log('hi');
  }, [experienceInfo, handleCheck]);

  const handleChange = (content) => {
    setExperienceInfo({ pos: content, id: expInfo.id });
    // handleCheck(experienceInfo);
  };

  return (
    <div className="Exp">
      <h3>Details</h3>
      <input value={expInfo.pos} className="position" type="text" placeholder="Position" required onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

export default ExperienceDetail;

ExperienceDetail.propTypes = {
  handleCheck: PropTypes.func.isRequired,
  expInfo: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};
