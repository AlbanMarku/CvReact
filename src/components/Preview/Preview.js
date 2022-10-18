import React from 'react';
import PropTypes from 'prop-types';
import './preview.css';
import Personal from './Personal/Personal';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import SideInfo from './SideInfo/SideInfo';

function Preview({
  pInfo, expComp, eduComp, contactInfo, preview,
}) {
  return (
    <div className="Preview">
      <div className="headerDetails">
        <Personal pInfo={pInfo} />
      </div>
      <div className="experienceDetails">
        <h2 className="previewTitle">Experience</h2>
        {
          expComp.map((obj) => (
            <Experience
              key={obj.id}
              pos={obj.pos}
              workTime={obj.workMonths}
              comp={obj.company}
            />
          ))
        }
      </div>
      <div className="educationDetails">
        <h2 className="previewTitle">Education</h2>
        {
          eduComp.map((obj) => (
            <Education
              key={obj.id}
              org={obj.org}
              degree={obj.degree}
              year={obj.year}
            />
          ))
        }
      </div>
      <div className="sideDetails">
        <h2 className="previewTitle">Contact details</h2>
        <SideInfo contactInfo={contactInfo} preview={preview} />
      </div>
    </div>
  );
}

export default Preview;

Preview.propTypes = {
  pInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  expComp: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  eduComp: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  contactInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  preview: PropTypes.string,
};

Preview.defaultProps = {
  preview: 'empty file',
};
