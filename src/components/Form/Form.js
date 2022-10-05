/* eslint-disable react/prop-types */
import React from 'react';
import './form.css';
import PersonalDetail from './PersonalDetail/PersonalDetail';

function Form({ funcy }) {
  return (
    <div className="Form">
      <form>
        <PersonalDetail funcer={funcy} />
      </form>
    </div>
  );
}

export default Form;
