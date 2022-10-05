/* eslint-disable react/prop-types */
import React from 'react';

function PersonalDetail({ setter }) {
  return (
    <div className="PD">
      <label htmlFor="firstName">
        First Name
        <input id="firstName" type="text" required onChange={(e) => setter({ firstName: e.target.value })} />
        {/* i'm not setting the existing object. I'm just passing in a fresh irrelevant object. */}
      </label>
      <label htmlFor="secondName">
        Second Name
        <input id="secondName" type="text" required onChange={(e) => setter({ lastName: e.target.value })} />
      </label>
    </div>

  );
}

export default PersonalDetail;
