import React from 'react';
import PropTypes from 'prop-types';
import './preview.css';
import Personal from './Personal/Personal';
import Experience from './Experience/Experience';

function Preview({ pInfo, expComp }) {
  return (
    <div className="Preview">
      <div className="headerDetails">
        <Personal pInfo={pInfo} />
      </div>
      <div className="experienceDetails">
        {
          expComp.map((obj) => (
            <Experience
              pos={obj.pos}
              workTime={obj.workMonths}
              comp={obj.company}
            />
          ))
        }
      </div>
      <div className="educationDetails">
        <p>education</p>
      </div>
      <div className="sideDetails">
        <p>side area</p>
      </div>
    </div>
  );
}

export default Preview;

Preview.propTypes = {
  pInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  expComp: PropTypes.objectOf(PropTypes.string).isRequired,

};
