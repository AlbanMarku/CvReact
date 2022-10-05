import './App.css';
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import Preview from '../components/Preview/Preview';
import Footer from '../components/Footer/Footer';

function App() {
  const [firstName, setFirstName] = useState();
  const updateName = (n) => {
    if (!n) {
      setFirstName('Your name here');
    } else {
      setFirstName(n);
    }
  };
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <div className="formArea">
          <Form funcy={updateName} />
        </div>
        <div className="previewArea">
          <Preview first={firstName} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
