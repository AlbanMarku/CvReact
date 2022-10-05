/* eslint-disable react/prop-types */
import React from 'react';
import './form.css';
import PersonalDetail from './PersonalDetail/PersonalDetail';

function Form({ setter }) {
  return (
    <div className="Form">
      <form>
        <PersonalDetail setter={setter} />
      </form>
    </div>
  );
}

export default Form;
