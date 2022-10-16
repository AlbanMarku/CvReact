import React from 'react';
import './form.css';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import JsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PersonalDetail from './PersonalDetail/PersonalDetail';
import ExperienceDetail from './ExperienceDetail/ExperienceDetail';
import EducationDetail from './EducationDetail/EducationDetail';
import SideDetail from './SideDetail/SideDetail';

function Form({
  setter, info, expComp, expCompSetter, handleCheck, eduComp, eduCompSetter,
}) {
  const handleClick = () => {
    expCompSetter([...expComp, {
      pos: '', workMonths: '', company: '', id: uniqid('expObj-'),
    }]);
  };

  const handleEduClick = () => {
    eduCompSetter([...eduComp, {
      org: '', degree: '', year: '', id: uniqid('eduObj-'),
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
              key={obj.id}
              handleCheck={handleCheck}
              id={obj.id}
            />
          ))
        }
        <div className="compBtn">
          <button type="button" onClick={handleClick}>Add another job</button>
        </div>
        <h2 className="titles">Education details</h2>
        {
          eduComp.map((obj) => (
            <EducationDetail
              key={obj.id}
              handleCheck={handleCheck}
              id={obj.id}
            />
          ))
        }
        <div className="compBtn">
          <button type="button" onClick={handleEduClick}>Add another education</button>
        </div>
        <h2 className="titles">Profile details</h2>
        <SideDetail />
      </form>
      <div className="printButton">
        <button type="button" onClick={handlePdf}>Print CV</button>
      </div>
    </div>
  );
}

export default Form;

Form.propTypes = {
  setter: PropTypes.func.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  expComp: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  expCompSetter: PropTypes.func.isRequired,
  handleCheck: PropTypes.func.isRequired,
  eduComp: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  eduCompSetter: PropTypes.func.isRequired,

};
