import React, { useState } from 'react';
import './App.css';
import uniqid from 'uniqid';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Preview from '../components/Preview/Preview';
import Footer from '../components/Footer/Footer';

function App() {
  const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', title: '' });
  const [expComponents, setExpComponents] = useState([{
    pos: '', workMonths: '', company: '', id: uniqid('expObj-'),
  }]);
  const [eduComponents, setEduComponents] = useState([{
    org: '', degree: '', year: '', id: uniqid('eduObj-'),
  }]);
  const [contactInfo, setContactInfo] = useState({ email: '', phone: '' });
  const [preview, setPreview] = useState(null);

  const handleArray = (item, compType) => {
    let arrayTarget = [];
    let setTarget;

    if (compType === 'job') {
      arrayTarget = expComponents;
      setTarget = setExpComponents;
    } else {
      arrayTarget = eduComponents;
      setTarget = setEduComponents;
    }

    const modifiedArr = arrayTarget.map((arrayItem) => {
      if (item.id === arrayItem.id) {
        return item;
      }
      return arrayItem;
    });
    setTarget(modifiedArr);
  };

  const updatePersonal = (n) => {
    setPersonalInfo(n);
  };

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <div className="formArea">
          <Form
            setter={updatePersonal}
            info={personalInfo}
            expComp={expComponents}
            expCompSetter={setExpComponents}
            handleCheck={handleArray}
            eduComp={eduComponents}
            eduCompSetter={setEduComponents}
            contactInfo={contactInfo}
            contactSetter={setContactInfo}
            setPreview={setPreview}
          />
        </div>
        <div className="previewArea">
          <Preview
            pInfo={personalInfo}
            expComp={expComponents}
            eduComp={eduComponents}
            contactInfo={contactInfo}
            preview={preview}
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
