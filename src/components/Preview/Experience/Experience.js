import React from 'react';
import PropTypes from 'prop-types';
import './experience.css';

function Experience({ pos, comp, workTime }) {
  let position = pos;
  let company = comp;
  let workMonths = workTime;
  if (!position) position = 'Work position';
  if (!company) company = 'Company';
  if (!workMonths) workMonths = 'Amount of months';
  return (
    <div className="Experience">
      <p>{position}</p>
      <p>{workMonths}</p>
      <p>{company}</p>
    </div>
  );
}

export default Experience;

Experience.propTypes = {
  pos: PropTypes.string.isRequired,
  comp: PropTypes.string.isRequired,
  workTime: PropTypes.string.isRequired,
};
