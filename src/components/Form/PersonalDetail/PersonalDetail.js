/* eslint-disable react/prop-types */
import React from 'react';

function PersonalDetail({ funcer }) {
  function callMe(e) {
    funcer(e.target.value);
  }
  return (
    <div className="PD">
      <label htmlFor="firstName">
        First Name
        <input id="firstName" type="text" required onChange={(e) => callMe(e)} />
      </label>
    </div>

  );
}

export default PersonalDetail;
