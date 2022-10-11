import React from 'react';
import PropTypes from 'prop-types';

function Experience({ pos, comp, workTime }) {
  let position = pos;
  let company = comp;
  let workMonths = workTime;
  if (!position) position = 'nothing';
  if (!company) company = 'company';
  if (!workMonths) workMonths = 'Amount of months';
  return (
    <div className="Experience">
      <h1>{position}</h1>
      <h1>{workMonths}</h1>
      <h1>{company}</h1>
    </div>
  );
}

export default Experience;

Experience.propTypes = {
  pos: PropTypes.string.isRequired,
  comp: PropTypes.string.isRequired,
  workTime: PropTypes.number.isRequired,
};
