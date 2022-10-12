/* eslint-disable react/prop-types */
import React from 'react';
import './form.css';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import PersonalDetail from './PersonalDetail/PersonalDetail';
import ExperienceDetail from './ExperienceDetail/ExperienceDetail';

function Form({
  setter, info, expComp, expCompSetter,
}) {
  const handleClick = () => {
    expCompSetter([...expComp, {
      pos: '', workMonths: '', company: '', id: uniqid('expObj-'),
    }]);
  };
  return (
    <div className="Form">
      <form>
        <PersonalDetail setter={setter} info={info} />
        <h2>Experience stuff</h2>
        {
          expComp.map((obj) => (
            <ExperienceDetail
              id={obj.id}
              expComp={expComp}
              expCompSetter={expCompSetter}
            />
          ))
        }
        <button type="button" onClick={handleClick}>Add comp</button>
      </form>
    </div>
  );
}

export default Form;

Form.propTypes = {
  setter: PropTypes.func.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  expComp: PropTypes.objectOf(PropTypes.number).isRequired,
  expCompSetter: PropTypes.func.isRequired,
};
