/* eslint-disable react/prop-types */
import React from 'react';
import './form.css';
import PropTypes from 'prop-types';
import PersonalDetail from './PersonalDetail/PersonalDetail';
import ExperienceDetail from './ExperienceDetail/ExperienceDetail';

function Form({
  setter, info, expComp, expCompSetter,
}) {
  return (
    <div className="Form">
      <form>
        <PersonalDetail setter={setter} info={info} />
        <h2>Experience stuff</h2>
        <ExperienceDetail
          expComp={expComp}
          expCompSetter={expCompSetter}
        />
        {
          expComp.map(() => (
            <ExperienceDetail
              expComp={expComp}
              expCompSetter={expCompSetter}
            />
          ))
        }
      </form>
    </div>
  );
}

export default Form;

Form.propTypes = {
  setter: PropTypes.func.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
};
