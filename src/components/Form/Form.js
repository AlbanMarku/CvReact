import React from 'react';
import './form.css';
import PropTypes from 'prop-types';
import PersonalDetail from './PersonalDetail/PersonalDetail';
import ExperienceDetail from './ExperienceDetail/ExperienceDetail';

function Form({
  setter, info, expSetter, expInfo,
}) {
  return (
    <div className="Form">
      <form>
        <PersonalDetail setter={setter} info={info} />
        <ExperienceDetail expSetter={expSetter} expInfo={expInfo} />
      </form>
    </div>
  );
}

export default Form;

Form.propTypes = {
  setter: PropTypes.func.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  expSetter: PropTypes.func.isRequired,
  expInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};
