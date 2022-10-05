import './App.css';
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Preview from '../components/Preview/Preview';
import Footer from '../components/Footer/Footer';

function App() {
  const [personalInfo, setPersonalInfo] = useState({ firstName: '', lastName: '', title: '' });// This isn't making the personalInfo var an object. It's just the default var.
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
          <Form setter={updatePersonal} info={personalInfo} />
        </div>
        <div className="previewArea">
          <Preview pInfo={personalInfo} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
