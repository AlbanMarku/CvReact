import './App.css';
import React, { useState, useCallback } from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Preview from '../components/Preview/Preview';
import Footer from '../components/Footer/Footer';

function App() {
  const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', title: '' });
  const [expComponents, setExpComponents] = useState([{ pos: '', id: 0 }]);

  const handleArray = useCallback((item) => {
    const modifiedArr = expComponents.map((arrayItem) => {
      if (item.id === arrayItem.id) {
        return item;
      }
      return arrayItem;
    });
    setExpComponents(modifiedArr);
  }, [expComponents]);

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
          />
        </div>
        <div className="previewArea">
          <Preview
            pInfo={personalInfo}
            expComp={expComponents}
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
