import React from 'react';
import './preview.css';
import PropTypes from 'prop-types';

function Preview({ first }) {
  return (
    <div className="Preview">
      <p>{first}</p>
    </div>
  );
}

export default Preview;

Preview.propTypes = {
  first: PropTypes.string,
};

Preview.defaultProps = {
  first: 'Your first name',
};
