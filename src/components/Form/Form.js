import React from 'react';
import './form.css';
import PropTypes from 'prop-types';
import PersonalDetail from './PersonalDetail/PersonalDetail';

function Form({ setter, info }) {
  return (
    <div className="Form">
      <form>
        <PersonalDetail setter={setter} info={info} />
      </form>
    </div>
  );
}

export default Form;

Form.propTypes = {
  setter: PropTypes.func.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
};
