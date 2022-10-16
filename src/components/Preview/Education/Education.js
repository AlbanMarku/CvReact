import React from 'react';
import PropTypes from 'prop-types';
import './education.css';

function Education({ org, degree, year }) {
  let organisation = org;
  let degreeStat = degree;
  let amountYear = year;
  if (!organisation) organisation = 'Study organisation';
  if (!degreeStat) degreeStat = 'Earned degree';
  if (!amountYear) amountYear = 'Years studied';
  return (
    <div className="Education">
      <p>{organisation}</p>
      <p>{degreeStat}</p>
      <p>{amountYear}</p>
    </div>
  );
}

export default Education;

Education.propTypes = {
  org: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
