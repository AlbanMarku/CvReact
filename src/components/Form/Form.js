/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import './form.css';
import PropTypes from 'prop-types';
import PersonalDetail from './PersonalDetail/PersonalDetail';
import ExperienceDetail from './ExperienceDetail/ExperienceDetail';

function Form({
  setter, info, expComp, expCompSetter, handleCheck,
}) {
  let uniqueId = -1;

  const handleClick = () => {
    expCompSetter([...expComp, { pos: '', id: '' }]);
  };
  return (
    <div className="Form">
      <form>
        <PersonalDetail setter={setter} info={info} />
        <h2>Experience stuff</h2>
        {
          expComp.map(() => {
            uniqueId++;
            return (
              <ExperienceDetail
                expComp={expComp}
                expCompSetter={expCompSetter}
                handleCheck={handleCheck}
                id={uniqueId}
              />
            );
          })
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
};
