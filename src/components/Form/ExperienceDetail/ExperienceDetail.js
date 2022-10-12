/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// TODO: Fix this stuff ^^^
import React, { useState, useEffect } from 'react';
import './experienceDetail.css';
import PropTypes from 'prop-types';

function ExperienceDetail({
  id, expComp, expCompSetter,
}) {
  const [experienceInfo, setExperienceInfo] = useState({
    pos: '', workMonths: '', company: '', id: null,
  });

  const handleChange = (content) => {
    setExperienceInfo({ ...experienceInfo, pos: content, id });
  };

  const handleTime = (content) => {
    setExperienceInfo({ ...experienceInfo, workMonths: content, id });
  };

  const handleCompany = (content) => {
    setExperienceInfo({ ...experienceInfo, company: content, id });
  };

  useEffect(() => {
    const modifiedArr = expComp.map((arrayItem) => {
      if (item.id === arrayItem.id) {
        return item;
      }
      return arrayItem;
    });
    expCompSetter(modifiedArr);
  }, [experienceInfo]);

  return (
    <div className="Exp">
      <h3>Details</h3>
      <input value={experienceInfo.pos} id="position" type="text" placeholder="Position" required onChange={(e) => handleChange(e.target.value)} />
      <h3>Work Months</h3>
      <input value={experienceInfo.workTime} id="workTime" type="text" placeholder="Amount of months" required onChange={(e) => handleTime(e.target.value)} />
      <h3>Company</h3>
      <input value={experienceInfo.company} id="company" type="text" placeholder="Company name" required onChange={(e) => handleCompany(e.target.value)} />

    </div>
  );
}

export default ExperienceDetail;

ExperienceDetail.propTypes = {
  id: PropTypes.number.isRequired,
};
