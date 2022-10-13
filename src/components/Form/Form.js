/* eslint-disable react/prop-types */
import React from 'react';
import './form.css';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import PersonalDetail from './PersonalDetail/PersonalDetail';
import ExperienceDetail from './ExperienceDetail/ExperienceDetail';

function Form({
  setter, info, expComp, expCompSetter, handleCheck,
}) {
  const handleClick = () => {
    expCompSetter([...expComp, {
      pos: '', workMonths: '', company: '', id: uniqid('expObj-'),
    }]);
  };
  return (
    <div className="Form">
      <form>
        <h2 className="titles">Personal details</h2>
        <PersonalDetail setter={setter} info={info} />
        <h2 className="titles">Experience stuff</h2>
        {
          expComp.map((obj) => (
            <ExperienceDetail
              handleCheck={handleCheck}
              id={obj.id}
            />
          ))
        }
        <div className="compBtn">
          <button type="button" onClick={handleClick}>Add comp</button>
        </div>
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
  handleCheck: PropTypes.func.isRequired,

};
