import './App.css';
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Preview from '../components/Preview/Preview';
import Footer from '../components/Footer/Footer';

function App() {
  const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', title: '' });
  const [expComponents, setExpComponents] = useState([]);
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
          />
        </div>
        <div className="previewArea">
          <Preview
            pInfo={personalInfo}
            // expInfo={experienceInfo}
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
