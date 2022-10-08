import React from 'react';
import './form.css';
import PropTypes from 'prop-types';
import PersonalDetail from './PersonalDetail/PersonalDetail';
import ExperienceDetail from './ExperienceDetail/ExperienceDetail';

function Form({
  setter, info, expComp, expCompSetter, handleCheck,
}) {
  let uniqueId = -1; // lmao

  const handleClick = () => {
    uniqueId += 1;
    expCompSetter([...expComp, { pos: '', id: uniqueId }]);
  };
  return (
    <div className="Form">
      <form>
        <PersonalDetail setter={setter} info={info} />
        <h2>Experience stuff</h2>
        {
          expComp.map((expCompItem) => {
            uniqueId += 1;// This is so btec.
            return (
              <ExperienceDetail
                handleCheck={handleCheck}
                expInfo={expCompItem}
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
  expComp: PropTypes.objectOf(PropTypes.number).isRequired,
  expCompSetter: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,

};
