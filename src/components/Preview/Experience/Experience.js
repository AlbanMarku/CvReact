import React from 'react';
import PropTypes from 'prop-types';

function Experience({ pos }) {
  let position = pos;
  if (!position) position = 'nothing';
  return (
    <h1>{position}</h1>
  );
}

export default Experience;

Experience.propTypes = {
  pos: PropTypes.string.isRequired,
};
