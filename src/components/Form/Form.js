/* eslint-disable react/prop-types */
import React from 'react';
import './form.css';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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
  async function handlePdf() {
    const selectedDiv = document.querySelector('.Preview');
    const doc = new JsPDF('portrait', 'pt', 'a4');
    await html2canvas(selectedDiv).then((canvas) => {
      doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);
      doc.output('dataurlnewwindow');
    });
  }
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
      <button type="button" onClick={handlePdf}>Print CV</button>

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
