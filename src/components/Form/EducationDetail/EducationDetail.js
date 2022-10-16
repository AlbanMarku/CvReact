import React, { useEffect, useState } from 'react';
import './educationDetail.css';
import PropTypes from 'prop-types';

function EducationDetail({ handleCheck, id }) {
  const [educationInfo, setEducationInfo] = useState({
    org: '', degree: '', year: '', id: null,
  });

  const handleOrg = (content) => {
    setEducationInfo({ ...educationInfo, org: content, id });
  };

  const handleDegree = (content) => {
    setEducationInfo({ ...educationInfo, degree: content, id });
  };

  const handleYear = (content) => {
    setEducationInfo({ ...educationInfo, year: content, id });
  };

  useEffect(() => {
    handleCheck(educationInfo, 'education');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [educationInfo]);
  return (
    <div className="Edu">
      <h3>Organisation</h3>
      <input value={educationInfo.org} id="organisation" type="text" placeholder="Organisation" required onChange={(e) => handleOrg(e.target.value)} />
      <h3>Degree</h3>
      <input value={educationInfo.degree} id="degree" type="text" placeholder="Degree" required onChange={(e) => handleDegree(e.target.value)} />
      <h3>Graduation year</h3>
      <input value={educationInfo.year} id="graduation" type="text" placeholder="Graduation" required onChange={(e) => handleYear(e.target.value)} />

    </div>
  );
}

export default EducationDetail;

EducationDetail.propTypes = {
  handleCheck: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
